// cd /mnt/c/Users/Adam/Desktop/InoBA/GraphqlHelper/strapi-graphql-migration-helper
import {
  VznEntity,
  VznEntityFragment,
  UploadFileVznInfoFragment,
  Enum_Vzn_Category,
  RegulationEntityFragment,
  UploadFileEntityFragment,
} from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { logAllRegs, CopyVznsToRegs, deleteAllRegs } from '../vzn-all-unused/vznsToRegulations_legacy'
import { parseVznCodeFromTitle, writeDataToFile, dataAsObject, getRegulationByCode } from './utils'
import { getAllVzns, logAllVzns, getSortedVZNsWithCodes } from './getVzns'
import { getAllUploadFiles, getSortedVznFilesWithCodes } from './getVznFiles'
import {
  logCheckIfExistenceMapIsValid,
  logCheckIfAllAmendmentsAndCancellationsAreRecognized,
  logCheckIfAllAmendmentsHaveRegulations,
  logCheckIfAllCancellationsHaveRegulations,
  logCheckIfAllDocumentsHaveStrapiId,
  logCheckIfAllRegulationsHaveValidFrom,
  logCheckIfAllRegulationsHaveMainDocument,
  logWarnIfAnyRegulationAmendsMoreRegulations,
  logCheckForDuplicateRegulations,
  logCheckIfAnyVznFilesAreNotAssignedToAnyRegulation,
} from './checks'
import { assignAmendmentsAndCancellationsFromData, createBareRegulationFromRegulationOject } from './createRegulations'

export type RegulationForMigration = {
  _code: string
  _year: number
  _number: number
  _source: string
  code: string
  slug: string
  fullTitle?: string
  effectiveFrom?: any //FIXME: be better than any
  category?: Enum_Vzn_Category | null
  isFullTextRegulation: boolean
  mainDocument: UploadFileVznInfoFragment
  attachmentDocuments: UploadFileVznInfoFragment[]
  consolidatedText?: UploadFileVznInfoFragment
  _cancellationRegulationDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _cancellationAttachmentDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _cancellationUnrecognizedDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _amendmentRegulationDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _amendmentAttachmentDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _amendmentUnrecognizedDocumentsInfo?: UploadFileVznInfoFragment[] | null
}

//Global RegExps
const regExpForAttachmentTitle = /[pP]r[ií]loh[ay]/
const regExpForShortVznTitle = /[vV][zZ][nN]/
//Setup Maps
let existenceMap = new Map<string, boolean>()
let amendedByMap = new Map<string, string[]>()
let cancelledByMap = new Map<string, string[]>()
//Setup Regulations data object
let regulationsFromVzns: RegulationForMigration[] = []
let regulationsFromRelations: RegulationForMigration[] = []
let regulationsFromVznsAndRelations: RegulationForMigration[] = []
//Setup garbage collectors
const dataCollector: {
  type:
    | 'urlMismatch'
    | 'priloha'
    | 'priloha - succes'
    | 'priloha - possible duplicate'
    | 'priloha - lost'
    | 'invalidTitle'
    | 'noDocument'
    | 'cannotAddToMap'
    | 'noValidFrom'
    | 'ZZZ_duplicateStrapiData_uploadFile'
  data: any
  reason: string
}[] = []

const CLIENT = localhostClient
main()

async function main() {
  await doTheWork(CLIENT)
}

// FUNCTIONS

async function doTheWork(client): Promise<RegulationForMigration[]> {
  // FAZA 0: get data
  const originalVzns: VznEntityFragment[] = await getAllVzns(client)
  const originalUploadFiles = await getAllUploadFiles(client)

  // FAZA 1 regulations from original vzns
  regulationsFromVzns = transformAllVznsToRegulations(originalVzns)
  fillExistenceMapWithRegulations(regulationsFromVzns)
  fillAmendedByMapWithRegulations(regulationsFromVzns)
  fillCancelledByMapWithRegulations(regulationsFromVzns)

  console.log('\n////////////////////////////////////////////////////////')
  console.log('\x1b[36mLOG AFTER PHASE 1 - creating regulations from original vzns \x1b[0m')
  logAllMapsSizes('after adding regulations from original vzns')
  logCheckIfExistenceMapIsValid(regulationsFromVzns, existenceMap)
  console.log('////////////////////////////////////////////////////////')

  // FAZA 2 regulations from relations
  regulationsFromRelations = transformAllVznsRelationsToRegulations(originalVzns)
  regulationsFromVznsAndRelations = [...regulationsFromVzns, ...regulationsFromRelations]
  fillExistenceMapWithRegulations(regulationsFromRelations)
  fillAmendedByMapWithRegulations(regulationsFromRelations)
  fillCancelledByMapWithRegulations(regulationsFromRelations)

  console.log('\n////////////////////////////////////////////////////////')
  console.log(
    '\x1b[36mLOG AFTER PHASE 2 - creating regulations from amendment and cancellation documents of original vzns \x1b[0m'
  )
  logAllMapsSizes('after adding regulations from relations')
  logCheckIfExistenceMapIsValid(regulationsFromVznsAndRelations, existenceMap)
  logCheckIfAllAmendmentsHaveRegulations(amendedByMap, existenceMap)
  logCheckIfAllCancellationsHaveRegulations(cancelledByMap, existenceMap)
  logCheckIfAllDocumentsHaveStrapiId(regulationsFromVznsAndRelations)
  logCheckIfAllRegulationsHaveValidFrom(regulationsFromVznsAndRelations)
  logCheckIfAllRegulationsHaveMainDocument(regulationsFromVznsAndRelations)
  logCheckForDuplicateRegulations(regulationsFromVznsAndRelations)
  logWarnIfAnyRegulationAmendsMoreRegulations(amendedByMap)
  console.log('////////////////////////////////////////////////////////')

  //sorting so life is easier
  regulationsFromVznsAndRelations.sort((a, b) => {
    if (a._code === b._code) return a._source.localeCompare(b._source)
    return a._code.localeCompare(b._code)
  })
  dataCollector.sort((a, b) => {
    if (a.type === b.type) return a.reason.localeCompare(b.reason)
    return a.type.localeCompare(b.type)
  })

  // logCheckIfAnyVznFilesAreNotAssignedToAnyRegulation(originalUploadFiles, regulationsFromVznsAndRelations)

  //Write map with names
  // const nameMap: any[] = []
  // regulationsFromVznsAndRelations.forEach((regulation) => {
  //   nameMap.push({
  //     code: regulation._code,
  //     fullTitle: regulation.title,
  //     mainDocumentUrl: regulation.mainDocument.attributes?.url,
  //   })
  // })
  // writeDataToFile(nameMap, '/data-exports/nameMap_' + Date.now())

  // FAZA 3: FILL STRAPI
  const regulationCreationPromises = regulationsFromVznsAndRelations.map((regulationObject) =>
    createBareRegulationFromRegulationOject(client, regulationObject)
  )
  await Promise.all(regulationCreationPromises)
    .then(() => {
      assignAmendmentsAndCancellationsFromData(client, regulationsFromVznsAndRelations)
    })
    .then(() => {
      console.log('\n////////////////////////////////////////////////////////')
      console.log('\x1b[36mLOG AFTER PHASE 3 - creating regulations in Strapi \x1b[0m')
      console.log('finished creating new bare Regulations (yet with no links to amendments or cancellations)')
      console.log('\n////////////////////////////////////////////////////////')
    })

  // FAZA LOG WRITING
  const shouldWeWrite = true
  if (shouldWeWrite || ['y', '3'].includes(prompt('Should we write original vzns? (y3/n)') ?? 'noAnswer')) {
    writeDataToFile(originalVzns, '/data-exports/originalVzns_' + Date.now())
    console.log('generated file with original vzns')
  }
  if (
    shouldWeWrite ||
    ['y', '3'].includes(prompt('Should we write log from duplicateDataCollector? (y3/n)') ?? 'noAnswer')
  ) {
    writeDataToFile(dataCollector, '/data-exports/dataCollector_' + Date.now())
    console.log('generated file wit dataCollector log')
  }
  if (shouldWeWrite || ['y', '3'].includes(prompt('Should we write final regulations? (y3/n)') ?? 'noAnswer')) {
    writeDataToFile(regulationsFromVznsAndRelations, '/data-exports/finalRegulations_' + Date.now())
    console.log('generated file with final regulations')
  }

  return regulationsFromVznsAndRelations
}

// MAP FUNCTIONS --------------------------------------------------------------

function fillExistenceMapWithRegulations(regulations: RegulationForMigration[]) {
  regulations.forEach((regulation) => {
    existenceMap.set(regulation._code, true)
  })
  existenceMap = new Map([...Array.from(existenceMap.entries())].sort())
}

function fillCancelledByMapWithRegulations(regulations: RegulationForMigration[]) {
  regulations.forEach((regulation) => {
    if (regulation?._cancellationRegulationDocumentsInfo && regulation?._cancellationRegulationDocumentsInfo.length) {
      regulation._cancellationRegulationDocumentsInfo.forEach((cancellation) => {
        const cancellationCode = parseVznCodeFromTitle(cancellation.attributes?.name).vznCode
        if (
          !cancellationCode ||
          cancellationCode === 'invalid' ||
          cancellation.attributes?.name.match(regExpForAttachmentTitle)
        ) {
          dataCollector.push({
            type: 'cannotAddToMap',
            data: cancellation,
            reason:
              'when filling cancellationMap by cancellation with name ' +
              cancellation.attributes?.name +
              ' at regulation ' +
              regulation._code +
              ' , that cancellation has invalid code so we dont add it to map',
          })
          return
        }
        if (cancelledByMap.get(regulation._code)) {
          const previousCancellationCodes = cancelledByMap.get(regulation._code) ?? []
          cancelledByMap.set(regulation._code, [...previousCancellationCodes, cancellationCode])
        } else {
          cancelledByMap.set(regulation._code, [cancellationCode])
        }
      })
    }
  })
  cancelledByMap = new Map([...Array.from(cancelledByMap.entries())].sort())
}

function fillAmendedByMapWithRegulations(regulations: RegulationForMigration[]) {
  regulations.forEach((regulation) => {
    if (regulation?._amendmentRegulationDocumentsInfo && regulation?._amendmentRegulationDocumentsInfo.length) {
      regulation._amendmentRegulationDocumentsInfo.forEach((amendment) => {
        const amendmentCode = parseVznCodeFromTitle(amendment.attributes?.name).vznCode
        if (!amendmentCode || amendmentCode === 'invalid') {
          dataCollector.push({
            type: 'cannotAddToMap',
            data: amendment,
            reason:
              'when filling amendmentMap by amendment with name ' +
              amendment.attributes?.name +
              ' at regulation ' +
              regulation._code +
              ' , that amendment title did not passed throught vznCode parser, so we dont add it to map',
          })
          return
        }
        if (amendedByMap.get(regulation._code)) {
          const previousAmendmentCodes = amendedByMap.get(regulation._code) ?? []
          amendedByMap.set(regulation._code, [...previousAmendmentCodes, amendmentCode])
        } else {
          amendedByMap.set(regulation._code, [amendmentCode])
        }
      })
    }
  })
  amendedByMap = new Map([...Array.from(amendedByMap.entries())].sort())
}

function logAllMapsSizes(message: string) {
  console.log('Logging map sizes:')
  console.log('existenceMap size: ' + existenceMap.size)
  console.log('amendedByMap size: ' + amendedByMap.size)
  console.log('cancelledByMap size: ' + cancelledByMap.size)
}

function logAllMaps(message: string) {
  console.log('//////////////\n\n\x1b[36mLOGGING ALL MAPS\n\x1b[0m')
  console.log(message)
  const ALL_MAPS = [
    ['existenceMap:', existenceMap],
    ['amendedByMap', amendedByMap],
    ['cancelledByMap', cancelledByMap],
  ]
  ALL_MAPS.forEach((map) => {
    console.log(map[0])
    console.log(map[1])
  })
  console.log('//////////////')
}

// DATA TRANSFORMATION FUNCTIONS --------------------------------------------------------------

function transformAllVznsRelationsToRegulations(vzns: VznEntityFragment[]): RegulationForMigration[] {
  const allRegulationsFromRelations: RegulationForMigration[] = []
  vzns.forEach((vzn) => {
    const regulationsFromRelations = transformVznRelationsToRegulations(vzn)
    allRegulationsFromRelations.push(...regulationsFromRelations)
  })
  console.log('Finished creating ' + allRegulationsFromRelations.length + ' regulations from vzns relations')
  return allRegulationsFromRelations
}

function transformVznRelationsToRegulations(vzn: VznEntityFragment): RegulationForMigration[] {
  const regulationsFromRelations: RegulationForMigration[] = []
  const attachmentDocuments: UploadFileVznInfoFragment[] = []
  const vznCode = parseVznCodeFromTitle(vzn.attributes?.title).vznCode
  const relationsFromVzn = [
    ...(vzn.attributes?.amedmentDocument ?? []),
    ...(vzn.attributes?.cancellationDocument ?? []),
  ]
  //nahodia sa regulationy
  relationsFromVzn.forEach((relation) => {
    const {
      vznYear: relationYear,
      vznNumber: relationNumber,
      vznCode: relationCode,
    } = parseVznCodeFromTitle(relation?.title)
    // CHECK IF RELATION TITLE IS VALID - if not, don't add it to relations and push it into collector
    if (!relation?.title) {
      dataCollector.push({
        type: 'invalidTitle',
        data: relation,
        reason: 'when retrieving relations from original vzn ' + vznCode + ', this relation has no title',
      })
      return
    }
    if (relation.title.match(regExpForAttachmentTitle)) {
      attachmentDocuments.push({ ...relation.document?.data })
      return
    }
    //We need to check if the relation has valid generated code only
    else if (!relationCode || relationCode === 'invalid') {
      dataCollector.push({
        type: 'invalidTitle',
        data: relation,
        reason:
          'when retrieving relations from original vzn ' +
          vznCode +
          ', the relation ' +
          relation.title +
          ' has invalid title for the vznCodeParser',
      })
      return
    }
    if (!relation.document?.data) {
      dataCollector.push({
        type: 'noDocument',
        data: relation,
        reason: 'when retrieving relations from original vzn ' + vznCode + ', this relation has no document',
      })
      return
    }
    if (existenceMap.has(relationCode)) {
      //check for existence in existenceMap and if document urls are different, we push the duplicate url into collector
      const relationDocumentUrl = relation?.document?.data?.attributes?.url
      const existingRegulationMainDocumentUrl = getRegulationByCode(regulationsFromVzns, relationCode)?.mainDocument
        ?.attributes?.url
      if (relationDocumentUrl !== existingRegulationMainDocumentUrl) {
        dataCollector.push({
          type: 'ZZZ_duplicateStrapiData_uploadFile',
          data: { id: relation.document.data.id, url: relationDocumentUrl },
          reason:
            'when creating a regulation from relations of ' +
            vznCode +
            ', this relation document url was not matching the existing regulation main document url',
        })
        //TODO: Co robit, ak sa url nezhoduju? Zatial to ignorujeme a nova regulation sa nepridava
      }
      return
    }
    //log if relation has no validFrom value
    if (!relation.validFrom) {
      dataCollector.push({
        type: 'noValidFrom',
        data: relation,
        reason: 'when retrieving relations from original vzn ' + vznCode + ', this relation has no validFrom value',
      })
      return
    }
    const regulation: RegulationForMigration = {
      _code: relationCode,
      _year: relationYear,
      _number: relationNumber,
      _source: 'relation of original vzn ' + vznCode,
      code: relationNumber + '/' + relationYear,
      slug: relationNumber + '-' + relationYear,
      fullTitle: relation.title,
      effectiveFrom: relation.validFrom,
      isFullTextRegulation: relation.title.match(/[uú]pln[eé]/i) ? true : false,
      mainDocument: relation?.document?.data,
      attachmentDocuments: [],
    }
    regulationsFromRelations.push(regulation)
    if (!existenceMap.has(relationCode)) {
      existenceMap.set(relationCode, true)
    }
  })
  //nahodia sa attachments pre dane regulationy
  attachmentDocuments.forEach((attachment) => {
    let hasBeenAssigned = false
    const attachmentCode = parseVznCodeFromTitle(attachment?.attributes?.name, 'includeAttachments').vznCode
    regulationsFromRelations.forEach((regulationFromRelation) => {
      if (regulationFromRelation._code === attachmentCode) {
        regulationFromRelation.attachmentDocuments = [...(regulationFromRelation.attachmentDocuments ?? []), attachment]
        hasBeenAssigned = true
      }
    })
    regulationsFromVzns.forEach((regulationFromVzn) => {
      //this checks whether the attachment belongs to an already existing regulation other than the currently processed one
      if (regulationFromVzn._code === attachmentCode && vznCode !== attachmentCode) {
        regulationFromVzn.attachmentDocuments = [...(regulationFromVzn.attachmentDocuments ?? []), attachment]
        hasBeenAssigned = true
        dataCollector.push({
          type: 'ZZZ_duplicateStrapiData_uploadFile',
          data: attachment,
          reason:
            'Priloha named: ' +
            attachment.attributes?.name +
            ' which was found among attachments of ' +
            vznCode +
            ' has been assigned to ' +
            regulationFromVzn._code +
            " which has already been created directly from original vzns so it's possible duplicate",
        })
      }
    })
    //we check here for lost attachment documents that werent assigned neither to the main regulation nor to any of its amendments
    if (!hasBeenAssigned && attachmentCode !== vznCode) {
      dataCollector.push({
        type: 'priloha - lost',
        data: attachment,
        reason:
          'Priloha named: ' +
          attachment.attributes?.name +
          ' which was found among attachments of ' +
          vznCode +
          ' has no regulation to be assigned to when searched among these relations: ' +
          JSON.stringify(regulationsFromRelations),
      })
    }
  })
  return regulationsFromRelations
}

function transformAllVznsToRegulations(vzns: VznEntityFragment[]): RegulationForMigration[] {
  const regulations: RegulationForMigration[] = []

  vzns.forEach((vzn) => {
    const newRegulation = transformOriginalVznToRegulation(vzn)
    if (!newRegulation) return
    regulations.push(newRegulation)
  })
  return regulations
}

function transformOriginalVznToRegulation(vzn: VznEntityFragment): RegulationForMigration | null {
  if (!vzn.attributes?.title) throw new Error('vzn has no title')
  const { vznYear, vznNumber, vznCode } = parseVznCodeFromTitle(vzn.attributes?.title)
  if (!vznCode || vznCode === 'invalid' || vznCode === null) {
    dataCollector.push({
      type: 'invalidTitle',
      data: vzn,
      reason: 'original vzn has invalid code for the vznCode parser, so we dont create a regulation from it',
    })
    return null
  }
  //split cancellation documents into actual cancellation VZN, attachment and unrecognized
  const cancellationRegulationDocumentsData: any[] = []
  const cancellationAttachmentDocumentsData: any[] = []
  const cancellationUnrecognizedDocumentsData: any[] = []
  if (vzn.attributes?.cancellationDocument?.length)
    vzn.attributes?.cancellationDocument.forEach((file) => {
      if (file?.title?.match(regExpForAttachmentTitle)) {
        cancellationAttachmentDocumentsData.push(file.document?.data)
      } else if (file?.title?.match(regExpForShortVznTitle)) {
        cancellationRegulationDocumentsData.push(file.document?.data)
      } else {
        cancellationUnrecognizedDocumentsData.push(file?.document?.data)
      }
    })
  //
  //split amendment documents into actual amendment VZN, attachment and unrecognized
  const amendmentRegulationDocumentsData: any[] = []
  const amendmentAttachmentDocumentsData: any[] = []
  const amendmentUnrecognizedDocumentsData: any[] = []
  if (vzn.attributes?.amedmentDocument?.length)
    vzn.attributes?.amedmentDocument.forEach((file) => {
      if (file?.title?.match(regExpForAttachmentTitle)) {
        amendmentAttachmentDocumentsData.push(file.document?.data)
      } else if (file?.title?.match(regExpForShortVznTitle)) {
        amendmentRegulationDocumentsData.push(file.document?.data)
      } else {
        amendmentUnrecognizedDocumentsData.push(file?.document?.data)
      }
    })
  //check whether this vzn has an attachment among its documents and if so, include it in returned regulation
  const attachmentDocuments: UploadFileVznInfoFragment[] | null = amendmentAttachmentDocumentsData.filter(
    (document: UploadFileVznInfoFragment) => {
      const documentCode = parseVznCodeFromTitle(document.attributes?.name, 'includeAttachments').vznCode
      const vznCode = parseVznCodeFromTitle(vzn.attributes?.title).vznCode
      return documentCode === vznCode
    }
  )
  //return new regulation
  const regulation: RegulationForMigration = {
    _code: vznCode,
    _year: vznYear,
    _number: vznNumber,
    _source: 'original vzn',
    code: vznNumber + '/' + vznYear,
    slug: vznNumber + '-' + vznYear,
    fullTitle: vzn.attributes?.title,
    isFullTextRegulation: vzn.attributes.title.match(/[uú]pln[eé]/i) ? true : false,
    mainDocument: { ...vzn.attributes?.mainDocument?.data },
    attachmentDocuments: attachmentDocuments,
    effectiveFrom: vzn.attributes?.validFrom,
    category: vzn.attributes?.category,
    consolidatedText: { ...vzn.attributes?.consolidatedText?.data },
    _cancellationRegulationDocumentsInfo: cancellationRegulationDocumentsData,
    _cancellationAttachmentDocumentsInfo: cancellationAttachmentDocumentsData,
    _cancellationUnrecognizedDocumentsInfo: cancellationUnrecognizedDocumentsData,
    _amendmentRegulationDocumentsInfo: amendmentRegulationDocumentsData,
    _amendmentAttachmentDocumentsInfo: amendmentAttachmentDocumentsData,
    _amendmentUnrecognizedDocumentsInfo: amendmentUnrecognizedDocumentsData,
  }
  return regulation
}
