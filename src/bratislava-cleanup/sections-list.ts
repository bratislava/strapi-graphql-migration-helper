import { stagingClient } from './gql'
import { isDefined } from '../utils/isDefined'
import { countBy } from 'lodash'
import { getNextUrl, getStrapiUrl } from './pages'

const DELIMITER = ','

async function sections() {
  let text = ''
  const header = ['section', 'count', 'page.id', 'slug', 'strapi', 'web']
  text = text.concat(header.join(DELIMITER)).concat('\n')

  for (const locale of ['sk']) {
    const { pages } = await stagingClient.AllPageForSections({ locale, limit: -1 })

    for (const page of pages?.data ?? []) {
      if (!page.id || !page.attributes) {
        continue
      }

      const sections = page.attributes.sections?.filter(isDefined).map((section) => section.__typename) ?? []

      const counts = countBy(sections)

      Object.entries(counts).forEach(([section, count]) => {
        const deployment = 'prod'
        const nextLink = page.attributes?.slug ? `=HYPERLINK("${getNextUrl(page.attributes.slug, deployment)}")` : ''
        const strapiLink = page.id ? `=HYPERLINK("${getStrapiUrl(page.id, deployment)}"; "Strapi ${page.id}")` : ''

        text = text
          .concat([section, count, page.id, page.attributes?.slug ?? '', strapiLink, nextLink].join(DELIMITER))
          .concat('\n')
      })
    }
  }

  text = text.replaceAll('ComponentSections', '')

  // console.log(text)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await Bun.write('./sections.csv', text)
}

sections()
