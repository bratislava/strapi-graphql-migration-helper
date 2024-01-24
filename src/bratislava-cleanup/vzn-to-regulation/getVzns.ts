import { GraphQLClient } from 'graphql-request'
import { VznEntityFragment } from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { parseVznCodeFromTitle } from './utils'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

export function getSortedVZNsWithCodes(client: QueryCLient): Promise<any[]> {
  return new Promise((resolve) => {
    const data = getAllVzns(client).then((data) => {
      const dataWithCodes = data.map((vzn: VznEntityFragment) => {
        const amendmentVzns = vzn.attributes?.amedmentDocument
        const amendmentsCodes = amendmentVzns?.map((amendmentVzn) => {
          return parseVznCodeFromTitle(amendmentVzn?.title).vznCode
        })
        const cancellationVzn = vzn.attributes?.cancellationDocument
        const vznWithCode = {
          code: parseVznCodeFromTitle(vzn.attributes?.title).vznCode,
          amendmentsCodes: amendmentVzns?.length ? amendmentsCodes : null,
          cancellationCode: cancellationVzn?.length ? parseVznCodeFromTitle(cancellationVzn[0]?.title).vznCode : null,
          title: vzn.attributes?.title,
          url: vzn.attributes?.mainDocument?.data?.attributes?.url,
        }
        return vznWithCode
      })
      dataWithCodes.sort((a, b) => {
        return a.code.localeCompare(b.code)
      })
      resolve(dataWithCodes)
    })
  })
}

export function logAllVzns(client: QueryCLient) {
  const dataVzn = getAllVzns(client)
  dataVzn.then((data) => {
    console.log('AllVzns:')
    data?.map((vzn) => {
      console.log(vzn.attributes?.title)
    })
    console.log(`Logged ${data?.length} VZNs`)
  })
}

export async function getAllVzns(client: QueryCLient) {
  const dataVzn = await client.AllVZNs()
  return dataVzn.vzns?.data ?? []
}
