import { stagingClient } from './gql'
import { isDefined } from '../utils/isDefined'

export const getNextUrl = (path: string, deployment: 'staging' | 'prod') => {
  return `https://${deployment === 'staging' ? 'bratislava-next.staging.' : ''}bratislava.sk/${path}`
}

export const getStrapiUrl = (pageId: string, deployment: 'staging' | 'prod') => {
  return `https://bratislava-strapi.${
    deployment === 'staging' ? 'staging.' : ''
  }bratislava.sk/admin/content-manager/collectionType/api::page.page/${pageId}?plugins[i18n][locale]=sk`
}

async function pages() {
  console.time('Fetch Time')
  const { pages } = await stagingClient.AllPageForSeo({ locale: 'en' })
  console.timeEnd('Fetch Time')

  const pagesParsed =
    pages?.data
      .map((page) => {
        return {
          id: page.id,
          slug: page.attributes?.slug,
          title: page.attributes?.title,
          metaDescription: page.attributes?.metaDiscription,
          keywords: page.attributes?.keywords,
          subtext: page.attributes?.subtext,
        }
      })
      .filter(isDefined) ?? []

  let text = ''
  const header = Object.keys(pagesParsed[0])
  text = text.concat(header.join(';')).concat('\n')

  pagesParsed.forEach((page) => {
    const values = Object.values(page).map((value) => {
      if (value === null || value === undefined) return ''
      else return value.replace(/\s/g, ' ')
    })
    text = text
      .concat([...values, page.id ? `=HYPERLINK("${getStrapiUrl(page.id, 'prod')}")` : ''].join(';'))
      .concat('\n')
  })

  console.log(pages?.data.length)
  // console.log(text)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  await Bun.write('./pages.csv', text)
}

pages()
