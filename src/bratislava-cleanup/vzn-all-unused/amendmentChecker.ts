import {
  VznEntity,
  VznEntityFragment,
  UploadFileVznInfoFragment,
  Enum_Vzn_Category,
} from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { logAllRegs, CopyVznsToRegs, deleteAllRegs } from './vznsToRegulations_legacy'
import { parseVznCodeFromTitle, writeDataToFile, dataAsObject, getRegulationByCode } from '../vzn-to-regulation/utils'
import { getAllVzns, logAllVzns, getSortedVZNsWithCodes } from '../vzn-to-regulation/getVzns'
import { getAllUploadFiles, getSortedVznFilesWithCodes } from '../vzn-to-regulation/getVznFiles'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

const CLIENT = localhostClient
doTheWork(CLIENT)

async function doTheWork(client: QueryCLient) {
  const vznDocumentsToLog: any[] = []
  const originalVzns: VznEntityFragment[] = await getAllVzns(client)
  originalVzns.forEach((vzn) => {
    vznDocumentsToLog.push(
      'MAINdoc vzn: ' + vzn.attributes?.title + 'name: ' + vzn.attributes?.mainDocument?.data?.attributes?.name
    )
    vzn.attributes?.amedmentDocument?.forEach((amedment) => {
      vznDocumentsToLog.push(
        'AMNdoc vzn: ' +
          vzn.attributes?.title +
          'title: ' +
          amedment?.title +
          ' name: ' +
          amedment?.document?.data?.attributes?.name
      )
    })
    vzn.attributes?.cancellationDocument?.forEach((cancellation) => {
      vznDocumentsToLog.push(
        'CANCdoc vzn: ' +
          vzn.attributes?.title +
          'title: ' +
          cancellation?.title +
          ' name: ' +
          cancellation?.document?.data?.attributes?.name
      )
    })
  })
  // WRITE
  writeDataToFile(vznDocumentsToLog, 'vznDocumentsToLog.json' + Date.now())
}
