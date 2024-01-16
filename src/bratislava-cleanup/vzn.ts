import { VznEntity } from '../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from './gql'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

// const waitTimer = setInterval(() => {
//   console.log('waiting...')
// }, 4000)

main()

// MAIN --------------------------------------------------------------

function main() {
  const CLIENT = localhostClient
  const options = [
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

async function logTransformedVzns(client: QueryCLient) {
  const rawVzns = await getAllVzns(client)
  const transformedVzns = getTransformedVzn(rawVzns)
  sortVzns(transformedVzns, 'attributes', 'vznYear')
  console.log(transformedVzns)
}

function sortVzns(inputArray, attributePrimary, attributeSecondary = '') {
  //WARNING: this function mutates the input array
  if (!attributePrimary || !attributeSecondary || !inputArray) return
  inputArray.sort((a, b) => {
    if (a[attributePrimary][attributeSecondary] === b[attributePrimary][attributeSecondary]) {
      return a.attributes.vznNumber - b.attributes.vznNumber
    }
    return a[attributePrimary][attributeSecondary] - b[attributePrimary][attributeSecondary]
  })
}

function getTransformedVzn(dataVzns) {
  const enhancedDataVzns: any[] = []
  if (dataVzns?.length)
    dataVzns?.forEach((vzn) => {
      const { vznYear, vznNumber } = extractVznYearAndNumberFromFullTitle(vzn.attributes?.title)
      const vznUrl = vzn.attributes?.mainDocument?.data?.attributes?.url ?? 'no url found'
      const enhancedVzn = { ...vzn, attributes: { ...vzn.attributes, vznYear, vznNumber, vznUrl } }
      enhancedDataVzns.push(enhancedVzn)
      if (!vznYear) {
        return
      }
      if (!vznNumber) {
        return
      }
    })
  return enhancedDataVzns
}

function extractVznYearAndNumberFromFullTitle(vznTitle: string | null | undefined) {
  if (!vznTitle) {
    return { vznYear: -1, vznNumber: -1 }
  }
  const matches = vznTitle.match(/VZN (\d+)\/(\d+)/)
  if (!matches) return { vznYear: -1, vznNumber: -1 }
  const vznYear = +matches?.[2] ?? -1
  const vznNumber = +matches?.[1] ?? -1
  return { vznYear, vznNumber }
}

// Legacy Loggers ----------------------------------------------

function logAllRegs(client: QueryCLient) {
  console.log('Calling logAllRegs')
  const dataRegulations = getAllRegs(client)
  dataRegulations.then((data) => {
    console.log(`AllRegs: ${JSON.stringify(data, null, 1)}`)
    console.log(`Logged ${data?.length} regs`)
  })
}

function logAllVzns(client: QueryCLient) {
  console.log('Calling logAllVzns')
  const dataVzn = getAllVzns(client)
  dataVzn.then((data) => {
    console.log('AllVzns:')
    data?.map((vzn) => {
      console.log(vzn.attributes?.title)
    })
    console.log(`Logged ${data?.length} VZNs`)
  })
}

// Mutations  ----------------------------------------------

async function deleteAllRegs(client: QueryCLient) {
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

async function CopyVznsToRegs(client: QueryCLient) {
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

// Basic data fetching functions ----------------------------------------------

async function getAllVzns(client: QueryCLient) {
  console.log('Calling getAllVzns')
  const dataVzn = await client.AllVZNs()
  return dataVzn.vzns?.data
}

async function getAllRegs(client: QueryCLient) {
  console.log('Calling getAllRegs')
  const dataRegulations = await client.allRegulationtest1s()
  return dataRegulations.regulationtest1S?.data ?? []
}
