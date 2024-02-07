// FIXME: WSL cd /mnt/c/Users/Adam/Desktop/InoBA/GraphqlHelper/strapi-graphql-migration-helper
import {
  VznEntity,
  VznEntityFragment,
  UploadFileVznInfoFragment,
  Enum_Vzn_Category,
  RegulationEntityFragment,
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
} from './checks'
import { assignAmendmentsAndCancellationsFromData, createBareRegulationFromRegulationOject } from './createRegulations'
import { fullTitleData } from './data-imports/fullTitleData.js'

const client = localhostClient
main()

async function main() {
  const regulations = await client.allRegulations()
  const promises = regulations.regulations?.data.map(async (regulation) => {
    if (!regulation.id) {
      console.log('regulation without id')
      return
    }
    const title = fullTitleData.find(
      (entry) => entry.code === parseVznCodeFromTitle('VZN ' + regulation.attributes?.code).vznCode
    )?.fullTitle
    return client.setFullTitleToRegulation({ regulationId: regulation.id, fullTitle: title }).then(() => {
      console.log('Added title ' + title + ' to regulation with id: ' + regulation.id)
    })
  })
}
