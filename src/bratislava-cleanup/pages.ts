import { stagingClient } from './gql'

async function pages() {
  const waitTimer = setInterval(() => {
    console.log('waiting...')
  }, 2000)

  for (const locale of ['sk', 'en']) {
    const { pages } = await stagingClient.AllPages({ locale })

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

pages()
