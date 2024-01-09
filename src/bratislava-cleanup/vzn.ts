import { stagingClient, productionClient, localhostClient } from './gql'

// vzn(stagingClient, 'Staging:')
vzn(productionClient, 'Production:')
// vzn(localhostClient, 'Localhost:')

async function vzn(client: any, message: string) {
  const waitTimer = setInterval(() => {
    console.log('waiting...')
  }, 4000)

  for (const locale of ['sk', 'en']) {
    console.log(message + ' Locale: ' + locale)
    const { pages } = await client.AllPages({ locale })

    for (const page of pages?.data ?? []) {
      if (!page.id || !page.attributes) {
        continue
      }

      const HOST = 'https://bratislava.sk/'
      const pageCategory = page.attributes.pageCategory
      const pageColor = page.attributes.pageColor

      if (!pageCategory || !pageColor)
        console.log(
          page.id,
          `${HOST}${locale === 'en' ? 'en/' : ''}${page.attributes.slug}`,
          ' pageCategory: ' + pageCategory?.data?.attributes?.title,
          ' pageColor: ' + pageColor
        )
    }
  }

  clearInterval(waitTimer)
}
