import {
  Enum_Regulationtest1_Category,
  SetAmendmentsAndCancellationsToRegulationDocument,
  VznEntity,
  VznEntityFragment,
} from '../../graphql/bratislava-localhost'
import { stagingClient, productionClient, localhostClient } from '../gql'
import { parseVznCodeFromTitle } from './utils'
import { getAllVzns, logAllVzns } from './getVzns'
import { RegulationForMigration } from './main'

type QueryCLient = typeof localhostClient
type Options = { id: string; displayName: string; executeFn: () => void }

//bare regulation means regulation with no links to amendments and cancellations
export async function createBareRegulationFromRegulationOject(
  client: QueryCLient,
  regulationObject: RegulationForMigration
) {
  return client.createBareRegulationTest1({
    title: regulationObject.title,
    slug: regulationObject.slug,
    validFrom: regulationObject.validFrom,
    category: (regulationObject.category ?? Enum_Regulationtest1_Category.Archiv) as Enum_Regulationtest1_Category,
    details: regulationObject.details,
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
  const regulationsFromStrapi = await client.allRegulationTest1s()
  console.log('regulations from strapi length: ' + regulationsFromStrapi.regulationtest1S?.data.length)
  regulationsFromStrapi.regulationtest1S?.data.forEach(async (regulationFromStrapi) => {
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
      const regulation = regulationsFromStrapi.regulationtest1S?.data.find(
        (regulation) => parseVznCodeFromTitle(regulation.attributes?.title).vznCode === amendmentCode
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
      ? regulationsFromStrapi.regulationtest1S?.data.find(
          (regulation) => parseVznCodeFromTitle(regulation.attributes?.title).vznCode === cancellationCodes[0]
        )?.id
      : null
    // assign amendments and cancellations from direct relations
    // TODO: we dont yet assing cancellation to all the cancelled regulation's amendments, this is to be discussed
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
              ' title: ' +
              regulationFromStrapi.attributes?.title
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
              ' title: ' +
              regulationFromStrapi.attributes?.title
          )
        })
    count++
    //console.log('done step ' + count + ': assigning amendments and cancellations from data ' + regulationObject._code)
  })
}
