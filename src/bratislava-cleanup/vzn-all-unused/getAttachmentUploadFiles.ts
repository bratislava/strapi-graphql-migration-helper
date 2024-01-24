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

const CLIENT = localhostClient
main(CLIENT)

async function main(client) {
  // const vznAttachmentFiles = await getAttachments(client)
  // console.log('Found ' + vznAttachmentFiles.length + ' attachment files')
  // console.log(vznAttachmentFiles)
  // const attachmentMap = getAttachmentMap(vznAttachmentFiles)
  // console.log('created attachment map with ' + Object.keys(attachmentMap).length + ' keys')
  // console.log(attachmentMap)

  const vznFiles = await getVznUploadFilesWitExpandedRegex(client)
  const vznFilesWithCodes = vznFiles.map((file) => {
    return { code: parseVznCodeFromTitle(file.attributes?.name), ...file }
  })
  console.log(vznFilesWithCodes.filter((file) => file.code.vznCode))
  console.log('//////////////////')
  console.log(vznFilesWithCodes.filter((file) => !file.code.vznCode))
  console.log('//////////////////')
  console.log('Found ' + vznFilesWithCodes.length + ' vzn files')
}

// FUNCTIONS --------------------------------------------------------------

export async function getVznUploadFilesWitExpandedRegex(client): Promise<UploadFileVznInfoFragment[]> {
  const originalUploadFiles = await getAllUploadFiles(client)
  const filteredUploadFilesMatchingVzn = originalUploadFiles.filter((file) => {
    return file.attributes?.name.match('[vV][šŠsS][eE][oO][bB]|[zZ][aáAÁ][vV][aAeEäÄ][zZ]')
  })
  return filteredUploadFilesMatchingVzn
}

export async function getAttachments(client) {
  const originalVzns: VznEntityFragment[] = await getAllVzns(CLIENT)
  const originalUploadFiles = await getAllUploadFiles(CLIENT)

  const filteredUploadFilesMatchingPriloha = originalUploadFiles.filter((file) => {
    const isPriloha = file.attributes?.name.match('[pP][rR][íÍiI][lL][oO]')
    const isMentioningVzn = file.attributes?.name.match('[vV][zZ][nN]')
    return isPriloha && isMentioningVzn
  })
  return filteredUploadFilesMatchingPriloha
}

function getAttachmentMap(vznAttachmentFiles: UploadFileVznInfoFragment[]) {
  const attachmentMap = {}
  vznAttachmentFiles.forEach((file) => {
    const vznCode = parseVznCodeFromTitle(file.attributes?.name).vznCode
    if (!attachmentMap[vznCode]) {
      attachmentMap[vznCode] = null
    }
    attachmentMap[vznCode] = { ...file }
  })
  return attachmentMap
}
