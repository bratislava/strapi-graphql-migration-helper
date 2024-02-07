import {
  VznEntity,
  VznEntityFragment,
  UploadFileVznInfoFragment,
  UploadFileEntityFragment,
  Enum_Vzn_Category,
} from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { logAllRegs, CopyVznsToRegs, deleteAllRegs } from '../vzn-all-unused/vznsToRegulations_legacy'
import { parseVznCodeFromTitle, writeDataToFile, dataAsObject, getRegulationByCode } from './utils'
import { getAllVzns, logAllVzns, getSortedVZNsWithCodes } from './getVzns'
import { getAllUploadFiles, getSortedVznFilesWithCodes } from './getVznFiles'
import { RegulationForMigration } from './main'

export function logcheckIfRegulationsCorrespondWithOldVzns(client, oldVzns) {
  console.log('checking if all regulations correspond with old vzns')
  const regulations = client.allRegulationTest1s()
  console.log('all regulations:')
  console.log(regulations)
}

export function logCheckIfAllRegulationsHaveActualUplneZnenie(regulations: RegulationForMigration[]) {
  const regulationsWithoutActualUplneZnenie: RegulationForMigration[] = []
  regulations.forEach((regulation) => {})
  if (regulationsWithoutActualUplneZnenie.length > 0) {
    console.log(
      `\x1b[31mCHECK FAILED: \x1b[0m ${regulationsWithoutActualUplneZnenie.length} regulations don't have actual uplne znenie`
    )
    const shouldLog = prompt('should we log all regulations with no actual uplne znenie? (y/n)')
    if (shouldLog === 'y') {
      console.log(
        'Regulations with no actual uplne znenie: ' + JSON.stringify(regulationsWithoutActualUplneZnenie, null, 2)
      )
    }
  } else {
    console.log('\x1b[32mCHECK PASSED:\x1b[0m All ' + regulations.length + ' regulations have actual uplne znenie')
  }
}

export function logCheckIfAnyVznFilesAreNotAssignedToAnyRegulation(
  files: UploadFileVznInfoFragment[],
  regulations: RegulationForMigration[]
) {
  const unassignedFiles: UploadFileVznInfoFragment[] = []
  files.forEach((file) => {
    const shortVznMatch = file.attributes?.name.match(/[vV][zZ][nN]/)
    const longVznMatch = file.attributes?.name.match(/z[aá]v[äae]zn/)
    if (!shortVznMatch && !longVznMatch) return

    const fileCode = parseVznCodeFromTitle(file.attributes?.name).vznCode

    if (!regulations.find((regulation) => regulation._code === fileCode)) {
      unassignedFiles.push(file)
    }
  })
  if (unassignedFiles.length > 0) {
    console.log(
      `\x1b[33mFriendly warning: \x1b[0m ${unassignedFiles.length} vzn files are not assigned to any regulation`
    )
    const shouldLog = prompt('should we log all unassigned files? (y/n)')
    if (shouldLog === 'y') {
      console.log('Unassigned files:')
      console.log(
        unassignedFiles.map((file) => {
          return {
            code: '',
            ...file,
          }
        })
      )
    }
  } else {
    console.log('\x1b[32mCHECK PASSED:\x1b[0m all vzn files are assigned to a regulation')
  }
}

export function logCheckForDuplicateRegulations(regulations: RegulationForMigration[]) {
  const duplicateRegulations = regulations.filter((regulation, index, self) => {
    return index !== self.findIndex((t) => t._code === regulation._code)
  })
  if (duplicateRegulations.length > 0) {
    console.log(`\x1b[31mCHECK FAILED: \x1b[0m ${duplicateRegulations.length} duplicate regulations found`)
    const shouldLog = prompt('should we log all duplicate regulations? (y/n)')
    if (shouldLog === 'y') {
      console.log('Duplicate regulations: ' + JSON.stringify(duplicateRegulations, null, 2))
    }
  } else {
    console.log('\x1b[32mCHECK PASSED:\x1b[0m no duplicate regulations found')
  }
}

export function logWarnIfAnyRegulationAmendsMoreRegulations(amendedByMap: Map<string, string[]>) {
  const amendingMap = new Map<string, string[]>()
  amendedByMap.forEach((amendments, amendee) => {
    amendments.forEach((amendment) => {
      if (amendingMap.has(amendment)) {
        amendingMap.set(amendment, [...(amendingMap.get(amendment) ?? []), amendee])
      } else {
        amendingMap.set(amendment, [amendee])
      }
    })
  })
  const regulationsAmendingMoreRegulations: Object[] = []
  amendingMap.forEach((amendees, amendment) => {
    if (amendees.length > 1) {
      regulationsAmendingMoreRegulations.push({ regulation: amendment, amendees: amendees })
    }
  })
  if (regulationsAmendingMoreRegulations.length > 0) {
    console.log(
      `\x1b[33mFriendly warning: \x1b[0m ${regulationsAmendingMoreRegulations.length} regulations amend more than one regulation:`
    )
    console.log(regulationsAmendingMoreRegulations)
    // const shouldLog = prompt('should we log all regulations which amend more than one regulation? (y/n)')
    // if (shouldLog === 'y') {
    //   console.log(
    //     'Regulations which amend more than one regulation: ' +
    //       JSON.stringify(regulationsAmendingMoreRegulations, null, 2)
    //   )
    // }
  } else {
    console.log('\x1b[32mCHECK PASSED:\x1b[0m no regulation amends more than one regulation')
  }
}

export function logCheckIfAllRegulationsHaveMainDocument(regulations: RegulationForMigration[]) {
  const regulationsWithNoMainDocument: RegulationForMigration[] = []
  regulations.forEach((regulation) => {
    if (!regulation.mainDocument) {
      regulationsWithNoMainDocument.push(regulation)
    }
  })
  if (regulationsWithNoMainDocument.length > 0) {
    console.log(
      `\x1b[31mCHECK FAILED: \x1b[0m ${regulationsWithNoMainDocument.length} regulations don't have main document`
    )
    const shouldLog = prompt('should we log all regulations with no main document? (y/n)')
    if (shouldLog === 'y') {
      console.log('Regulations with no main document: ' + JSON.stringify(regulationsWithNoMainDocument, null, 2))
    }
  } else {
    console.log('\x1b[32mCHECK PASSED:\x1b[0m All ' + regulations.length + ' regulations have main document')
  }
}

export function logCheckIfAllRegulationsHaveValidFrom(regulations: RegulationForMigration[]) {
  const regulationsWithInvalidValidFrom: RegulationForMigration[] = []
  regulations.forEach((regulation) => {
    if (!regulation.validFrom) {
      regulationsWithInvalidValidFrom.push(regulation)
    }
  })
  if (regulationsWithInvalidValidFrom.length > 0) {
    console.log(
      `\x1b[31mCHECK FAILED: \x1b[0m ${regulationsWithInvalidValidFrom.length} regulations don't have validFrom`
    )
    const shouldLog = prompt('should we log all regulations with no validFrom? (y/n)')
    if (shouldLog === 'y') {
      console.log('Regulations with no validFrom value: ' + JSON.stringify(regulationsWithInvalidValidFrom, null, 2))
    }
  } else {
    console.log('\x1b[32mCHECK PASSED:\x1b[0m All ' + regulations.length + ' regulations have validFrom')
  }
}

export function logCheckIfAllDocumentsHaveStrapiId(regulations: RegulationForMigration[]) {
  const documentsWithMissingIds: any[] = []
  regulations.forEach((regulation) => {
    if (!regulation.mainDocument?.id) {
      documentsWithMissingIds.push({
        regulation: regulation._code,
        documentType: 'main document',
        document: { ...regulation.mainDocument },
      })
    }
    regulation.attachmentDocuments?.forEach((attachmentDocument) => {
      if (!attachmentDocument.id) {
        documentsWithMissingIds.push({
          regulation: regulation._code,
          documentType: 'attachment document',
          document: { ...attachmentDocument },
        })
      }
    })
  })
  if (documentsWithMissingIds.length > 0) {
    console.log(
      `\x1b[31mCHECK FAILED: \x1b[0m ${documentsWithMissingIds.length} documents (strapi UploadFiles) which are either main document or attachment document of a regulation don't have strapiId`
    )
    const shouldLogUnrecognizedDocuments = prompt('should we log all documents with no strapi id? (y/n)')
    if (shouldLogUnrecognizedDocuments === 'y') {
      console.log(
        'Unrecognized amendments and cancellations for regulation:' + JSON.stringify(documentsWithMissingIds, null, 2)
      )
    }
  } else {
    console.log(
      '\x1b[32mCHECK PASSED:\x1b[0m All documents (strapi UploadFiles) which are either main document or attachment document of a regulation have valid id'
    )
  }
}

export function logCheckIfAllAmendmentsAndCancellationsAreRecognized(regulations: RegulationForMigration[]) {
  const unrecognizedAmendments: Object[] = []
  const unrecognizedCancellations: Object[] = []
  regulations.forEach((regulation) => {
    if (regulation._cancellationUnrecognizedDocumentsInfo?.length) {
      unrecognizedCancellations.push(
        'regulation ' +
          regulation._code +
          ' has unrecognized cancellation document ' +
          JSON.stringify(regulation._cancellationUnrecognizedDocumentsInfo)
      )
    }
    if (regulation._amendmentUnrecognizedDocumentsInfo?.length) {
      unrecognizedAmendments.push(
        'regulation ' +
          regulation._code +
          ' has unrecognized amendment document ' +
          JSON.stringify(regulation._amendmentUnrecognizedDocumentsInfo)
      )
    }
  })
  const unrecognizesDocuments = [...unrecognizedAmendments, ...unrecognizedCancellations]
  if (unrecognizesDocuments.length > 0) {
    console.log(
      '\x1b[31mCHECK FAILED: \x1b[0m while transforming original vzns to regulations, ' +
        unrecognizesDocuments.length +
        ' amendments or cancellations were not recognized and processed so if they were an attachment to the regulation, we need to do that manually'
    )
    const shouldLogUnrecognizedDocuments = prompt('should we log all unrecognized amendments and cancellations? (y/n)')
    if (shouldLogUnrecognizedDocuments === 'y') {
      console.log('Unrecognized amendments and cancellations: ' + JSON.stringify(unrecognizesDocuments, null, 2))
    }
  } else {
    console.log('\x1b[32m CHECK PASSED:\x1b[0m all amendments and cancellations are recognized and processed')
  }
}

export function logCheckIfAllAmendmentsHaveRegulations(
  amendedByMap: Map<string, string[]>,
  existenceMap: Map<string, boolean>
) {
  const missingRegulationsCodes: Object[] = []
  amendedByMap.forEach((value, key) => {
    value.forEach((amendmentCode) => {
      if (!existenceMap.get(amendmentCode)) {
        missingRegulationsCodes.push({ amendedRegulationCode: key, amendmentCode: amendmentCode })
      }
    })
  })
  if (missingRegulationsCodes.length === 0)
    console.log('\x1b[32mCHECK PASSED:\x1b[0m all amendments from amendmentMap have separate regulation entity')
  else {
    console.log(
      `\x1b[31mCHECK FAILED: \x1b[0m Missing Regulations from amendmentMap: \x1b[0m ${missingRegulationsCodes.length} amendments don't exist as a separate regulation entity`
    )
    const shouldLogMissingRegulations = prompt('should we log all missing unproceesed amendments? (y/n)')
    if (shouldLogMissingRegulations === 'y') {
      console.log(
        `INFO: Missing Regulations which are amendments of existing regulations:\n ${JSON.stringify(
          missingRegulationsCodes
        )}`
      )
    }
  }
}

export function logCheckIfAllCancellationsHaveRegulations(
  cancelledByMap: Map<string, string[]>,
  existenceMap: Map<string, boolean>
) {
  const missingRegulationsCodes: string[] = []
  cancelledByMap.forEach((value, key) => {
    value.forEach((cancellationCode) => {
      if (!existenceMap.get(cancellationCode)) {
        missingRegulationsCodes.push(cancellationCode)
      }
    })
  })
  if (missingRegulationsCodes.length === 0)
    console.log('\x1b[32mCHECK PASSED:\x1b[0m all cancellations from cancellationMap have separate regulation entity')
  else {
    console.log(
      `\x1b[31mCHECK FAILED: \x1b[0m Missing Regulations from cancellationMap: \x1b[0m ${missingRegulationsCodes.length} cancellations don't exist as a separate regulation entity`
    )
    const shouldLogMissingRegulations = prompt('should we log all missing unproceesed cancellations? (y/n)')
    if (shouldLogMissingRegulations === 'y') {
      console.log(
        `INFO: Missing Regulations which are cancellations of existing regulations:\n ${missingRegulationsCodes}`
      )
    }
  }
}

export function logCheckIfExistenceMapIsValid(
  regulations: RegulationForMigration[],
  existenceMap: Map<string, boolean>
) {
  let mismatchCount = 0
  regulations.forEach((regulation) => {
    if (!existenceMap.get(regulation._code)) {
      mismatchCount++
    }
  })
  existenceMap.forEach((value, key) => {
    if (regulations.filter((regulation) => regulation._code === key).length === 0) mismatchCount++
  })
  if (mismatchCount === 0) console.log('\x1b[32mCHECK PASSED:\x1b[0m existenceMap corresponds with all regulations')
  else {
    console.log(
      `\x1b[31mInvalid existenceMap: \x1b[0m ${mismatchCount} regulations are missing in existenceMap or vice versa`
    )
  }
}
