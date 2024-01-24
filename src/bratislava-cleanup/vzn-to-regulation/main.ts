// FIXME: WSL cd /mnt/c/Users/Adam/Desktop/InoBA/GraphqlHelper/strapi-graphql-migration-helper
import {
  VznEntity,
  VznEntityFragment,
  UploadFileVznInfoFragment,
  Enum_Vzn_Category,
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
} from './checks'

export type RegulationForMigration = {
  _code: string
  _year: number
  _number: number
  _source: string
  title: string
  mainDocument: UploadFileVznInfoFragment | null
  attachmentDocuments: UploadFileVznInfoFragment[] | null
  validFrom?: any //FIXME: be better than any
  details?: string | null
  category?: Enum_Vzn_Category | null
  consolidatedText?: UploadFileVznInfoFragment
  _cancellationRegulationDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _cancellationAttachmentDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _cancellationUnrecognizedDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _amendmentRegulationDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _amendmentAttachmentDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _amendmentUnrecognizedDocumentsInfo?: UploadFileVznInfoFragment[] | null
}

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

async function doTheWork(client) {
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
  logCheckIfAllAmendmentsHaveRegulations(amendedByMap, existenceMap)
  logCheckIfAllCancellationsHaveRegulations(cancelledByMap, existenceMap)
  logCheckIfAllAmendmentsAndCancellationsAreRecognized(regulationsFromVzns)
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
  console.log('////////////////////////////////////////////////////////')

  const shouldWeWrite = true
  // WRITING ORIGINAL VZNS
  if (shouldWeWrite || ['y', '3'].includes(prompt('Should we write original vzns? (y3/n)') ?? 'noAnswer')) {
    writeDataToFile(originalVzns, '/data-exports/originalVzns_' + Date.now())
    console.log('generated file with original vzns')
  }
  // WRITING MISSING
  if (
    shouldWeWrite ||
    ['y', '3'].includes(prompt('Should we write log from duplicateDataCollector? (y3/n)') ?? 'noAnswer')
  ) {
    dataCollector.sort((a, b) => {
      return a.type.localeCompare(b.type)
    })
    writeDataToFile(dataCollector, '/data-exports/dataCollector_' + Date.now())
    console.log('generated file wit dataCollector log')
  }
  // WRITING FINAL REGULATIONS
  if (shouldWeWrite || ['y', '3'].includes(prompt('Should we write final regulations? (y3/n)') ?? 'noAnswer')) {
    writeDataToFile(regulationsFromVznsAndRelations, '/data-exports/finalRegulations_' + Date.now())
    console.log('generated file with final regulations')
  }
  //checkIfAllAmendmentsHaveRegulations()
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
          cancellation.attributes?.name.match(/[pP]r[ií]loh[ay]/)
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
  const vznCode = parseVznCodeFromTitle(vzn.attributes?.title).vznCode
  const relationsFromVzn = [
    ...(vzn.attributes?.amedmentDocument ?? []),
    ...(vzn.attributes?.cancellationDocument ?? []),
  ]
  //DEBUG:

  //DEBUG:
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
    if (
      relation.title.match(/[pP]r[ií]loh[ay]/) ||
      relation.document?.data?.attributes?.name.match(/[pP]r[ií]loh[ay]/)
    ) {
      dataCollector.push({
        type: 'priloha',
        data: relation,
        reason:
          'REMOVE THIS WHEN PRILOHY ARE FUNCTIONING when retrieving relations from original vzn ' +
          vznCode +
          ', this relation is a priloha and we skip it',
      })
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
      title: relation?.title,
      validFrom: relation.validFrom,
      mainDocument: relation?.document?.data,
      attachmentDocuments: null, //FIXME: fill this
    }
    regulationsFromRelations.push(regulation)
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
      if (file?.title?.match(/[pP]r[ií]loh/)) {
        cancellationAttachmentDocumentsData.push(file.document?.data)
      } else if (file?.title?.match(/[vV][zZ][nN]/)) {
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
      if (file?.title?.match(/[pP]r[ií]loh/)) {
        amendmentAttachmentDocumentsData.push(file.document?.data)
      } else if (file?.title?.match(/[vV][zZ][nN]/)) {
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
    title: vzn.attributes?.title,
    mainDocument: { ...vzn.attributes?.mainDocument?.data },
    attachmentDocuments: attachmentDocuments,
    validFrom: vzn.attributes?.validFrom,
    details: vzn.attributes?.details,
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
