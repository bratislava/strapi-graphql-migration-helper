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
import { RegulationForMigration } from './main'

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
