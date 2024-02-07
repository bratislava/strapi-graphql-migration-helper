import { stagingClient, productionClient, localhostClient } from '../gql'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

const CLIENT = localhostClient
deleteAllRegs(CLIENT).then(() => console.log('done deleting all regulations'))

//bare regulation means regulation with no links to amendments and cancellations
export async function deleteAllRegs(client: QueryCLient) {
  const regulations = await client.allRegulations()
  regulations.regulations?.data.forEach(async (regulation) => {
    if (!regulation || !regulation.id) return
    await client.deleteRegulationById({ id: regulation.id })
  })
  //
}
