import { VznEntity, VznEntityFragment } from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { parseVznCodeFromTitle } from './utils'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

export async function getSortedVznFilesWithCodes(client: QueryCLient) {
  const uploadVZNFilesData = await getAllUploadVZNFiles(client)
  const vznFilesData = uploadVZNFilesData.map((file) => {
    const { vznYear, vznNumber, vznCode } = parseVznCodeFromTitle(file.name)
    return {
      code: vznCode,
      ...file,
    }
  })
  const sortedVznFilesData = vznFilesData.sort((a, b) => {
    if (!a.code || !b.code) return 0
    return a.code.localeCompare(b.code)
  })
  console.log(sortedVznFilesData)
  return sortedVznFilesData
}

export function logAllUploadVZNFiles(client: QueryCLient) {
  getAllUploadVZNFiles(client).then((data) => {
    console.log(data)
  })
}

export async function getAllUploadVZNFiles(client: QueryCLient) {
  const dataUploadFiles = await getAllUploadFiles(client)
  const transformedDataUploadFiles = [{ name: '' }]
  dataUploadFiles.map((file) => {
    const transformedFile = {
      name: file.attributes?.name ?? 'no name found',
      url: file.attributes?.url ?? 'no url found',
    }
    if (file.attributes?.name.match('[vV][zZ][nN]')) transformedDataUploadFiles.push(transformedFile)
  })
  return transformedDataUploadFiles
}

// Basic data fetching functions ----------------------------------------------

export async function getAllUploadFiles(client: QueryCLient) {
  const dataUploadFiles = await client.AllFiles()
  return dataUploadFiles.uploadFiles?.data ?? []
}
