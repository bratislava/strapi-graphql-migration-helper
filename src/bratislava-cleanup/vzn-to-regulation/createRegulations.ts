import { Enum_Regulation_Category } from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { parseVznCodeFromTitle } from './utils'
import { RegulationForMigration } from './main'

type QueryCLient = typeof localhostClient

//bare regulation means regulation with no links to amendments and cancellations
export async function createBareRegulationFromRegulationOject(
  client: QueryCLient,
  regulationObject: RegulationForMigration
) {
  return client.createBareRegulation({
    code: regulationObject.code,
    slug: regulationObject.slug,
    fullTitle: regulationObject.fullTitle ?? '',
    effectiveFrom: regulationObject.effectiveFrom ?? null,
    category: (regulationObject.category ?? Enum_Regulation_Category.Archiv) as Enum_Regulation_Category,
    isFullTextRegulation: regulationObject.isFullTextRegulation,
    mainDocumentId: regulationObject.mainDocument?.id ?? null,
    consolidatedTextId: regulationObject.consolidatedText?.id ?? null,
    attachmentsIds: regulationObject.attachmentDocuments.map((doc) => doc.id ?? null),
  })
}

export async function assignAmendmentsAndCancellationsFromData(
  client: QueryCLient,
  regulationObjects: RegulationForMigration[]
) {
  let count = 0
  const regulationsFromStrapi = await client.allRegulations()
  console.log('regulations from strapi length: ' + regulationsFromStrapi.regulations?.data.length)
  regulationsFromStrapi.regulations?.data.forEach(async (regulationFromStrapi) => {
    if (!regulationFromStrapi || !regulationFromStrapi.id) return
    const regulationObject = regulationObjects.find(
      (regulationObject) => regulationObject.mainDocument.id === regulationFromStrapi.attributes?.mainDocument?.data?.id
    )
    if (!regulationObject)
      throw new Error(
        'regulationObject related to strapi-regulation with id: ' + regulationFromStrapi.id + ' not found'
      )
    // find amendment ids
    const amendmentCodes = regulationObject?._amendmentRegulationDocumentsInfo?.map(
      (amendment) => parseVznCodeFromTitle(amendment.attributes?.name).vznCode
    )
    const amendmentRegulationsIds: string[] = []
    amendmentCodes?.forEach((amendmentCode) => {
      const regulation = regulationsFromStrapi.regulations?.data.find(
        (regulation) => parseVznCodeFromTitle('VZN ' + regulation.attributes?.code).vznCode === amendmentCode
      )
      if (!regulation || !regulation.id) return
      amendmentRegulationsIds.push(regulation.id)
    })
    // find cancellation id
    const cancellationCodes = regulationObject?._cancellationRegulationDocumentsInfo?.map(
      (cancellation) => parseVznCodeFromTitle(cancellation.attributes?.name).vznCode
    )
    if (cancellationCodes?.length && cancellationCodes?.length > 1)
      throw new Error('more than one cancellation found for regulation ' + regulationObject._code)
    const cancellationRegulationId = cancellationCodes?.length
      ? regulationsFromStrapi.regulations?.data.find(
          (regulation) => parseVznCodeFromTitle('VZN ' + regulation.attributes?.code).vznCode === cancellationCodes[0]
        )?.id
      : null
    // assign amendments and cancellations from direct relations
    if (amendmentRegulationsIds && amendmentRegulationsIds?.length)
      await client
        .setAmendmentsToRegulation({
          regulationId: regulationFromStrapi.id,
          amendmentsIds: amendmentRegulationsIds ?? [],
        })
        .catch(async (err) => {
          console.log(
            'error at setting amendments ids: ' +
              amendmentRegulationsIds +
              ' for regulation id: ' +
              regulationFromStrapi.id +
              ' code: ' +
              regulationFromStrapi.attributes?.code
          )
        })
    if (cancellationRegulationId && cancellationRegulationId?.length)
      await client
        .setCancellationToRegulation({
          regulationId: regulationFromStrapi.id,
          cancellationId: cancellationRegulationId ?? '',
        })
        .catch((err) => {
          console.log(
            'error at setting cancellation ' +
              cancellationRegulationId +
              ' for regulation id: ' +
              regulationFromStrapi.id +
              ' code: ' +
              regulationFromStrapi.attributes?.code
          )
        })
    count++
    //console.log('done step ' + count + ': assigning amendments and cancellations from data ' + regulationObject._code)
  })
}
