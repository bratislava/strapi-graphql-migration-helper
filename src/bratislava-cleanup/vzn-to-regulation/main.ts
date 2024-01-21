import {
  VznEntity,
  VznEntityFragment,
  UploadFileVznInfoFragment,
  Enum_Vzn_Category,
} from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { logAllRegs, CopyVznsToRegs, deleteAllRegs } from './vznsToRegulations_legacy'
import { parseVznCodeFromTitle, writeDataToFile, dataAsObject } from './utils'
import { getAllVzns, logAllVzns, getSortedVZNsWithCodes } from './vzns'
import { getAllUploadFiles, getSortedVznFilesWithCodes } from './vznFiles'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

const CLIENT = localhostClient
main()

// MAIN --------------------------------------------------------------

function main() {
  const options: Options[] = [
    {
      id: '0',
      displayName: 'Exit',
      executeFn: () => {
        console.log('končíme')
      },
    },
    {
      id: '1',
      displayName: 'write to file from terminal',
      executeFn: () => {
        const data = prompt('give me data to write')
        const fileName = prompt('give me file name')
        writeDataToFile(data, fileName)
      },
    },
    {
      id: '3',
      displayName: 'DO the worky',
      executeFn: () => {
        doTheWork(CLIENT)
      },
    },
  ]

  const selectedOptionId = prompt(
    `Select option: \n${options
      .map((option) => {
        return `${option.id}: ${option.displayName}`
      })
      .join('\n')}\n`
  )
  options.find((option) => selectedOptionId === option?.id)?.executeFn()
}

async function doTheWork(client: QueryCLient) {
  //Setup Maps
  const existenceMap = new Map<string, boolean>()
  const amendmentMap = new Map<string, string>()
  const cancellationMap = new Map<string, string>()
  //get input data
  const originalVzns: VznEntityFragment[] = await getAllVzns(client)
  const originalUploadFiles = await getAllUploadFiles(client)
  const filteredUploadFilesMatchingVzn = originalUploadFiles.filter((file) => {
    return file.attributes?.name.match('[vV][zZ][nN]')
  })
  //log input data
  console.log('done')
  console.log('originalVzns length' + originalVzns.length)
  console.log('originalUploadFiles length' + originalUploadFiles.length)
  console.log('filteredUploadFilesMatchingVzn length' + filteredUploadFilesMatchingVzn.length)
  //transform original vzns to regulations
  const regulationsFromVzns = originalVzns.map((vzn) => {
    return transformOriginalVznToRegulations(vzn)
  })
  //update maps
  regulationsFromVzns.forEach((regulation) => {
    existenceMap.set(regulation._code, true)
    // if (regulation?._amendmentDocumentsInfo && regulation?._amendmentDocumentsInfo.length) {
    //   regulation._amendmentDocumentsInfo.forEach((amendment) => {
    //     amendmentMap.set(parseVznCodeFromTitle(amendment.attributes?.name).vznCode, regulation._code)
    //   })
    // }
    // if (regulation?._cancellationDocumentsInfo && regulation?._cancellationDocumentsInfo.length) {
    //   regulation._cancellationDocumentsInfo.forEach((cancellation) => {
    //     cancellationMap.set(parseVznCodeFromTitle(cancellation.attributes?.name).vznCode, regulation._code)
    //   })
    // }
  })
  console.log(regulationsFromVzns)
  //write transformed data to file
  writeDataToFile(regulationsFromVzns, 'regulationsFromVzns.json')
  writeDataToFile(existenceMap, 'existenceMap.json')
  // writeDataToFile(amendmentMap, 'amendmentMap.json', true)
  //writeDataToFile(cancellationMap, 'cancellationMap.json', true)
}

// FUNCTIONS --------------------------------------------------------------

function transformOriginalVznToRegulations(vzn: VznEntityFragment): RegulationForMigration {
  if (!vzn.attributes?.title) throw new Error('vzn has no title')
  const { vznYear, vznNumber, vznCode } = parseVznCodeFromTitle(vzn.attributes?.title)
  const regulation = {
    _code: vznCode,
    _year: vznYear,
    _number: vznNumber,
    title: vzn.attributes?.title,
    mainDocument: { ...vzn.attributes?.mainDocument?.data },
    validFrom: vzn.attributes?.validFrom,
    details: vzn.attributes?.details,
    category: vzn.attributes?.category,
    consolidatedText: { ...vzn.attributes?.consolidatedText?.data },
    _cancellationDocumentsInfo: vzn.attributes?.cancellationDocument?.length
      ? {
          ...vzn.attributes?.cancellationDocument?.map((file) => {
            return { ...file?.document?.data }
          }),
        }
      : null,
    _amendmentDocumentsInfo: vzn.attributes?.amedmentDocument?.length
      ? {
          ...vzn.attributes?.amedmentDocument?.map((file) => {
            return { ...file?.document?.data }
          }),
        }
      : null,
  }
  return regulation
}

// TYPES --------------------------------------------------------------

//TODO: use Pick
type RegulationForMigration = {
  _code: string
  _year: number
  _number: number
  title: string
  mainDocument: UploadFileVznInfoFragment
  validFrom?: any
  details?: string | null
  category?: Enum_Vzn_Category | null
  consolidatedText?: UploadFileVznInfoFragment
  _cancellationDocumentsInfo?: UploadFileVznInfoFragment[] | null
  _amendmentDocumentsInfo?: UploadFileVznInfoFragment[] | null
}
