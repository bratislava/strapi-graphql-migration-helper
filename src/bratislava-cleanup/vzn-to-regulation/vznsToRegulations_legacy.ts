import { VznEntity, VznEntityFragment } from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { parseVznCodeFromTitle } from './utils'
import { getAllVzns, logAllVzns } from './vzns'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

//main()

// MAIN --------------------------------------------------------------

function main() {
  const CLIENT = localhostClient
  const options: Options[] = [
    {
      id: '0',
      displayName: 'Exit',
      executeFn: () => {
        console.log('končíme')
      },
    },
    { id: '1', displayName: 'log all Regt1', executeFn: () => logAllRegs(CLIENT) },
    { id: '2', displayName: 'log all VZN', executeFn: () => logAllVzns(CLIENT) },
    { id: '3', displayName: 'Copy VZN->REGt1', executeFn: () => CopyVznsToRegs(CLIENT) },
    { id: '4', displayName: 'Delete all REGt1s', executeFn: () => deleteAllRegs(CLIENT) },
    {
      id: '5',
      displayName: 'log all VZNs sorted by year and number',
      executeFn: () => logTransformedVzns(CLIENT),
    },
    {
      id: '6',
      displayName: 'Get regulations from vzn and sort by year and number',
      executeFn: () => logRegulationsFromVzns(CLIENT),
    },
    {
      id: '7',
      displayName: 'Get regulations from vzn and log relations',
      executeFn: () => logRegulationAndRelations(CLIENT),
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
  //clearInterval(waitTimer)
}

// FUNCTIONS --------------------------------------------------------------

export async function logRegulationAndRelations(client: QueryCLient) {
  const rawVzns = await getAllVzns(client)
  const regulations = transformVznsToRegulations(rawVzns)
  sortArrayByAtrributes(regulations, 'year', 'number')
  const regulationsWithRelations = regulations.map((regulation) => {
    return {
      mainRegulationCode: regulation.title.match(/VZN (\d+)\/(\d+)/)?.[0] ?? 'unable to create code',
      mainRegulationRestOfTitle: regulation.title.replace(/VZN (\d+)\/(\d+) /, ''),
      cancellationDocuments: regulation.cancellationDocumentsNumbers ?? [],
      amendmentDocuments: regulation.amendment ?? [],
    }
  })
  console.info(JSON.stringify(regulationsWithRelations))
  // const allMentionedRegulations: (string | null | undefined)[] = ['']
  // relations.forEach((relation) => {
  //   allMentionedRegulations.push(
  //     ...[...[relation.mainRegulation, ...relation.cancellationDocuments, ...relation.ammendmentDocuments]]
  //   )
  // })
  // const flattenedRegulations = allMentionedRegulations.map((regulation): Regulation | undefined => {
  //   if (!regulation) return undefined
  //   const { vznYear, vznNumber } = extractVznYearAndNumberFromFullTitle(regulation)
  //   return {
  //     title: regulation,
  //     year: vznYear,
  //     number: vznNumber,
  //   }
  // })
  // sortArrayByAtrributes(flattenedRegulations, 'year', 'number')
  // console.log(flattenedRegulations)
}

export async function logRegulationsFromVzns(client: QueryCLient) {
  const rawVzns = await getAllVzns(client)
  const regulations = transformVznsToRegulations(rawVzns)
  sortArrayByAtrributes(regulations, 'year', 'number')
  console.log(regulations)
}

export function sortArrayByAtrributes(inputArray, attributePrimary = '', attributeSecondary = '') {
  //WARNING: this function mutates the input array
  if (!attributePrimary || !inputArray) return
  inputArray.sort((a: Object, b: Object) => {
    if (a[attributePrimary] === b[attributePrimary]) {
      return a[attributeSecondary] - b[attributeSecondary]
    }
    return a[attributePrimary] - b[attributePrimary]
  })
}

export type Regulation = {
  title: string
  year: number
  number: number
  url?: string
  cancellationDocumentsNumbers?: (string | null | undefined)[]
  amendment?: (string | null | undefined)[]
}

export function transformVznsToRegulations(dataVzns: VznEntityFragment[]): Regulation[] {
  const regulations: Regulation[] = []
  if (dataVzns?.length)
    dataVzns?.forEach((vzn) => {
      //prepare values
      const { vznYear, vznNumber } = parseVznCodeFromTitle(vzn.attributes?.title)
      const vznUrl = vzn.attributes?.mainDocument?.data?.attributes?.url
      const cancellationDocumentNumber = vzn.attributes?.cancellationDocument?.map((cancellation) => {
        return cancellation?.title
      })
      const amendment = vzn.attributes?.amedmentDocument?.map((amendment) => {
        return amendment?.title
      })

      const regulation: Regulation = {
        title: vzn.attributes?.title ?? 'no title found',
        year: vznYear ?? -1,
        number: vznNumber ?? -1,
        url: vznUrl ?? 'no url found',
        cancellationDocumentsNumbers: cancellationDocumentNumber,
        amendment: amendment,
      }

      regulations.push(regulation)
    })
  return regulations
}

export function getTransformedVzns(dataVzns: VznEntityFragment[]) {
  const transformedVzns: any[] = []
  if (dataVzns?.length)
    dataVzns?.forEach((vzn) => {
      //prepare values
      const { vznYear, vznNumber } = parseVznCodeFromTitle(vzn.attributes?.title)
      const vznUrl = vzn.attributes?.mainDocument?.data?.attributes?.url ?? 'no url found'
      const transformedVzn = { ...vzn, attributes: { ...vzn.attributes, vznYear, vznNumber, vznUrl } }
      transformedVzns.push(transformedVzn)
    })
  return transformedVzns
}

// TransformedVzns legacy ----------------------------------------------

export async function logTransformedVzns(client: QueryCLient) {
  const rawVzns = await getAllVzns(client)
  const transformedVzns: VznEntityFragment[] = getTransformedVzns(rawVzns)
  sortVzns(transformedVzns, 'attributes', 'vznYear', 'vznNumber')
  console.log(transformedVzns)
}

export function sortVzns(inputArray, parentAttribute: string, attributePrimary = '', attributeSecondary = '') {
  if (!parentAttribute || !attributePrimary || !inputArray) return
  inputArray.sort((a: Object, b: Object) => {
    if (a[parentAttribute][attributePrimary] === b[parentAttribute][attributePrimary]) {
      return a[parentAttribute][attributeSecondary] - b[parentAttribute][attributeSecondary]
    }
    return a[parentAttribute][attributePrimary] - b[parentAttribute][attributePrimary]
  })
}

// Mutations  ----------------------------------------------

export async function deleteAllRegs(client: QueryCLient) {
  //Log function name
  console.log('Calling deleteAllRegs')
  //Get all regs
  const dataRegsBeforeDeletion = await getAllRegs(client)
  const countRegsBeforeDeletion = dataRegsBeforeDeletion?.length
  console.log('Deleting regs...')
  let counter = 0
  //Delete all regs
  const deletionPromises = dataRegsBeforeDeletion.map(async (reg) => {
    if (!reg.id) return
    await client.deleteRegulationTest1ById({ id: reg.id })
    console.log('deleted reg with id:' + reg.id + ' counter: ' + ++counter)
  })
  await Promise.all(deletionPromises).finally(() => {
    console.log('All regs deleted')
  })
  //Check counts and log
  const dataRegsAfterDeletion = await getAllRegs(client)
  const countRegsAfterDeletion = dataRegsAfterDeletion?.length
  console.log(`Before deletion: ${countRegsBeforeDeletion} regs.`)
  console.log(`Deleted ${counter} regs.`)
  console.log(`After deletion: ${countRegsAfterDeletion} regs.`)
  //clearInterval(waitTimer)
}

export async function CopyVznsToRegs(client: QueryCLient) {
  //Log function name
  console.log('Calling VznsToRegs')
  //Get all regs and VZNs
  const dataRegsBeforeCopy = await getAllRegs(client)
  const countRegsBeforeCopy = dataRegsBeforeCopy?.length
  const dataVzn = await client.AllVZNs()
  if (!dataVzn.vzns?.data) return
  console.log('Copying VZNs to regs...')
  let counter = 0
  //Copy all VZNs to regs
  const copyPromises = dataVzn.vzns?.data.map(async (vzn) => {
    await client.newRegulationTest1ByName({ name: vzn.attributes?.title ?? 'no title found' })
    console.log('copied' + vzn.attributes?.title + ' counter: ' + ++counter)
  })

  await Promise.all(copyPromises).finally(() => {
    console.log('All regs copied')
  })
  const dataRegsAfterCopy = await getAllRegs(client)
  const countRegsAfterCopy = dataRegsAfterCopy?.length
  console.log(`Before copy: ${countRegsBeforeCopy} regs.`)
  console.log(`Copied ${counter} regs.`)
  console.log(`After copy: ${countRegsAfterCopy} regs.`)
}

// Legacy Loggers ----------------------------------------------

export function logAllRegs(client: QueryCLient) {
  console.log('Calling logAllRegs')
  const dataRegulations = getAllRegs(client)
  dataRegulations.then((data) => {
    console.log(`AllRegs: ${JSON.stringify(data, null, 1)}`)
    console.log(`Logged ${data?.length} regs`)
  })
}

// Basic data fetching functions ----------------------------------------------

export async function getAllRegs(client: QueryCLient) {
  console.log('Calling getAllRegs')
  const dataRegulations = await client.allRegulationtest1s()
  return dataRegulations.regulationtest1S?.data ?? []
}
