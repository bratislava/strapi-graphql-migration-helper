import { stagingClient, productionClient, localhostClient } from './gql'

// vzn(stagingClient, 'Staging:')
//vzn(productionClient, 'Production:')
vzn(localhostClient, 'Localhost:')

async function vzn(client: typeof stagingClient | typeof productionClient | typeof localhostClient, message: string) {
  const waitTimer = setInterval(() => {
    console.log('waiting...')
  }, 4000)

  const logger: string[] = ['']

  // const data = await client.AllVZNs()
  const data = await client.AllPages({ locale: 'sk' })

  logger.push(JSON.stringify(data))

  // data.vzns?.data.forEach((vzn) => {
  //   logger.push(JSON.stringify(vzn))
  //   logger.push('\n')
  // })

  // for (const locale of ['sk', 'en']) {
  //   console.log(message + ' Locale: ' + locale)
  //   const { pages } = await client.AllPages({ locale })

  //   for (const page of pages?.data ?? []) {
  //     if (!page.id || !page.attributes) {
  //       continue
  //     }

  //     const HOST = 'https://bratislava.sk/'
  //     const pageCategory = page.attributes.pageCategory
  //     const pageColor = page.attributes.pageColor

  //     if (!pageCategory || !pageColor) {
  //       console.log(
  //         page.id,
  //         `${HOST}${locale === 'en' ? 'en/' : ''}${page.attributes.slug}`,
  //         ' pageCategory: ' + pageCategory?.data?.attributes?.title,
  //         ' pageColor: ' + pageColor
  //       )
  //       logger.push(page.id + ' ' + `${HOST}${locale === 'en' ? 'en/' : ''}${page.attributes.slug}`)
  //     }
  //   }
  // }

  clearInterval(waitTimer)
  console.log('\n' + '\u001b[1;32m' + 'LOGGER\n' + logger.map((item) => ['→', item].join('')).join('\n') + '\n')
}
