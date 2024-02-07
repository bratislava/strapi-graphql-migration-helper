import { VznEntity, VznEntityFragment } from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { parseVznCodeFromTitle } from '../vzn-to-regulation/utils'
import { getAllVzns, logAllVzns } from '../vzn-to-regulation/getVzns'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

const CLIENT = localhostClient
main()

function main() {
  optionPicker(CLIENT)
}

function optionPicker(client: QueryCLient) {
  const options: Options[] = [
    {
      id: '0',
      displayName: 'Exit',
      executeFn: () => {
        console.log('končíme')
      },
    },
    { id: '1', displayName: 'log all Regt1', executeFn: () => logAllRegulationtest1s(CLIENT) },
    {
      id: '2',
      displayName: 'log all Regt1 with relations',
      executeFn: () => logAllRegulationtest1sWithRelations(CLIENT),
    },
    {
      id: '3',
      displayName: 'add new Regt1s',
      executeFn: () => createNewRegulationtest1sByNames(CLIENT, prompt('provide names') ?? ''),
    },
    {
      id: '4',
      displayName: 'delete all Regt1s',
      executeFn: () => deleteAllRegulationtest1s(CLIENT),
    },
    {
      id: '5',
      displayName: 'assign amendments to regs',
      executeFn: () => promptSetAmendmentsToRegulationTest1s(CLIENT),
    },
  ]

  console.log('////////////////////////////////////////////////////////////////////////////////')
  const selectedOptionId = prompt(
    `Select option: \n${options
      .map((option) => {
        return `${option.id}: ${option.displayName}`
      })
      .join('\n')}\n`
  )
  options.find((option) => selectedOptionId === option?.id)?.executeFn()
}

// Mutations  ----------------------------------------------

export async function addAmendmentToRegulationByIds(client: QueryCLient, amendmentId: string, regId: string) {
  await client.setRegulationTest1AmendmentByIds({ id: regId, amendmentIds: amendmentId })
}

export async function promptSetAmendmentsToRegulationTest1s(client: QueryCLient) {
  logAllRegulationtest1sWithRelations(client)
  console.log('Calling assignAmendmentsToRegs')
  const dataRegs = await getAllRegulationsWithRelations(client)
  const updatePromises = dataRegs.map(async (reg) => {
    if (!reg.id) return
    const amendmentId = prompt("Provide amendment's id for reg " + reg.attributes?.title)
    await client.setRegulationTest1AmendmentByIds({ id: reg.id, amendmentIds: amendmentId })
  })
  await Promise.all(updatePromises).finally(() => {
    console.log('All regs updated')
  })
  if (confirm('Do you want to log all regs?')) {
    logAllRegulationtest1sWithRelations(client)
  }
}

export async function createNewRegulationtest1sByNames(client: QueryCLient, promptString: string) {
  if (!promptString || promptString === '') {
    console.log('No names provided, exitting.')
    return
  }
  let counter = 0
  const regulationNames = promptString.split(',')
  const copyPromises = regulationNames.map(async (name) => {
    await client.newRegulationTest1ByName({ name: name })
    console.log(++counter + ' created regulation ' + name)
  })
  await Promise.all(copyPromises).finally(() => {
    console.log('All ' + counter + ' regs copied')
  })
  optionPicker(client)
}

export async function deleteAllRegulationtest1s(client: QueryCLient) {
  //Log function name
  console.log('Calling deleteAllRegs')
  //Get all regs
  const dataRegsBeforeDeletion = await getAllRegulationtest1s(client)
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
  const dataRegsAfterDeletion = await getAllRegulationtest1s(client)
  const countRegsAfterDeletion = dataRegsAfterDeletion?.length
  console.log(`Before deletion: ${countRegsBeforeDeletion} regs.`)
  console.log(`Deleted ${counter} regs.`)
  console.log(`After deletion: ${countRegsAfterDeletion} regs.`)
}

// Loggers ----------------------------------------------

export function logAllRegulationtest1sWithRelations(client: QueryCLient) {
  console.log('Calling logAllRegsWithRelations')
  const dataRegulationsWithRelations = getAllRegulationsWithRelations(client)
  dataRegulationsWithRelations.then((data) => {
    data.forEach((reg) => {
      console.log({
        id: reg?.id,
        title: reg?.attributes?.title,
        amendments: reg?.attributes?.amendments?.data.map((amendment) => amendment.id),
        amending: reg?.attributes?.amending?.data.map((amending) => amending.id),
      })
    })
    console.log(`Logged ${data?.length} regs with relations`)
  })
}

export function logAllRegulationtest1s(client: QueryCLient) {
  console.log('Calling logAllRegs')
  const dataRegulations = getAllRegulationtest1s(client)
  dataRegulations.then((data) => {
    console.log(data)
    console.log(`Logged ${data?.length} regs`)
  })
}

// Getters ----------------------------------------------

export async function getAllRegulationsWithRelations(client: QueryCLient) {
  console.log('Calling getAllRegulationsWithRelations')
  const dataRegulationsWithRelations = await client.allRegulationTest1sWithAmendments()
  return dataRegulationsWithRelations.regulationtest1S?.data ?? []
}

export async function getAllRegulationtest1s(client: QueryCLient) {
  console.log('Calling getAllRegs')
  const dataRegulations = await client.allRegulationtest1s()
  return dataRegulations.regulationtest1S?.data ?? []
}
