import { Enum_Regulationtest1_Category, VznEntity, VznEntityFragment } from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { parseVznCodeFromTitle } from './utils'
import { getAllVzns, logAllVzns } from './getVzns'
import { RegulationForMigration } from './main'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

const CLIENT = localhostClient
deleteAllRegs(CLIENT).then(() => console.log('done deleting all regulations'))

//bare regulation means regulation with no links to amendments and cancellations
export async function deleteAllRegs(client: QueryCLient) {
  const regulations = await client.allRegulationTest1s()
  regulations.regulationtest1S?.data.forEach(async (regulation) => {
    if (!regulation || !regulation.id) return
    await client.deleteRegulationTest1ById({ id: regulation.id })
  })
  //
}
