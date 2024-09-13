import { stagingClient } from './gql'

async function sections() {
  for (const locale of ['sk', 'en']) {
    const { pages } = await stagingClient.AllPages({ locale })
    const flatTextMap = []
    const institutionsMap = []
    const institutionsNarrowMap = []
    const othersMap = []

    for (const page of pages?.data ?? []) {
      if (!page.id || !page.attributes) {
        continue
      }

      const ComponentSectionsSubpageList = page.attributes.pageHeaderSections?.filter(
        (section) => section?.__typename === 'ComponentSectionsSubpageList'
      )

      const ComponentSectionsFeaturedBlogPosts = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsFeaturedBlogPosts'
      )

      const ComponentSectionsGallery = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsGallery'
      )

      const ComponentSectionsIframe = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsIframe'
      )

      const ComponentSectionsOrganizationalStructure = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsOrganizationalStructure'
      )

      const ComponentSectionsIconTitleDesc = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsIconTitleDesc'
      )

      const ComponentSectionsNumericalList = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsNumericalList'
      )

      const ComponentSectionsVideos = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsVideos'
      )

      const ComponentSectionsAccordion = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsAccordion'
      )

      const ComponentSectionsCalculator = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsCalculator'
      )

      // const ComponentSectionsContact = page.attributes.sections?.filter(
      //   (section) => section?.__typename === 'ComponentSectionsContact'
      // )

      const ComponentSectionsDivider = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsDivider'
      )

      const ComponentSectionsWaves = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsWaves'
      )

      const ComponentSectionsLinks = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsLinks'
      )

      const ComponentSectionsNarrowText = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsNarrowText'
      )

      const ComponentSectionsFileList = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsFileList'
      )

      const ComponentSectionsTextWithImage = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsTextWithImage'
      )

      const ComponentSectionsColumnedText = page.attributes.sections?.filter(
        (section) => section?.__typename === 'ComponentSectionsColumnedText'
      )

      // const ComponentSectionsNewsletter = page.attributes.sections?.filter(
      //   (section) => section?.__typename === 'ComponentSectionsNewsletter'
      // )

      // const ComponentSectionsDocumentList = page.attributes.sections?.filter(
      //   (section) => section?.__typename === 'ComponentSectionsDocumentList'
      // )
      //
      // if (ComponentSectionsDocumentList?.length) {
      //   const HOST = 'https://bratislava.sk/'
      //   console.log(
      //     page.id,
      //     `${HOST}${locale === 'en' ? 'en/' : ''}${page.attributes.slug}`,
      //     ComponentSectionsDocumentList.length
      //   )
      // }

      // if (ComponentSectionsFileList.length) {
      //   const sectionsSet = new Set(
      //     page.attributes.sections.map(section => section.__typename)
      //   );
      //
      //   console.log(sectionsSet);
      //
      //   ComponentSectionsFileList.map(section => {
      //     if (section.__typename === 'ComponentSectionsFileList') {
      //       const set = new Set(section.fileList.map(file => file.category));
      //       if (set.size > 1) {
      //         console.log(
      //           locale,
      //           page.id,
      //           page.attributes.slug,
      //           // ComponentSectionsFileList.length,
      //           set.size
      //           // set
      //         );
      //       }
      //     }
      //   });
      // }

      // if (ComponentSectionsNarrowText?.length) {
      //   const centered = ComponentSectionsNarrowText?.filter(
      //     (section) => section?.__typename === 'ComponentSectionsNarrowText' && section.align === 'center'
      //   )
      //   if (centered?.length) {
      //     console.log(page.id, page.attributes.slug, centered.length)
      //   }
      // }

      // if (ComponentSectionsContact?.length) {
      //   const HOST = 'https://bratislava.sk/'
      //   console.log(
      //     page.id,
      //     `${HOST}${locale === 'en' ? 'en/' : ''}${page.attributes.slug}`,
      //     ComponentSectionsContact.length
      //   )
      // }

      // if (ComponentSectionsIconTitleDesc.length) {
      //   console.log(
      //     page.id,
      //     page.attributes.slug,
      //     ComponentSectionsIconTitleDesc.length
      //   );
      // }

      // if (ComponentSectionsAccordion.length) {
      //   ComponentSectionsAccordion.filter(
      //     section => section.__typename === 'ComponentSectionsAccordion'
      //   ).map(section => {
      //     const flatTextCount = section.flatText.length;
      //     const institutionsCount = section.institutions.length;
      //     const institutionsNarrowCount = section.institutionsNarrow.length;
      //
      //     if (flatTextCount && !institutionsCount && !institutionsNarrowCount) {
      //       flatTextMap.push({
      //         id: page.id,
      //         slug: page.attributes.slug,
      //         url: `https://bratislava.sk/${locale}/${page.attributes.slug}`,
      //         flatTextCount,
      //       });
      //     } else if (
      //       !flatTextCount &&
      //       institutionsCount &&
      //       !institutionsNarrowCount
      //     ) {
      //       institutionsMap.push({
      //         id: page.id,
      //         slug: page.attributes.slug,
      //         url: `https://bratislava.sk/${locale}/${page.attributes.slug}`,
      //         institutionsCount,
      //       });
      //     } else if (
      //       !flatTextCount &&
      //       !institutionsCount &&
      //       institutionsNarrowCount
      //     ) {
      //       institutionsNarrowMap.push({
      //         id: page.id,
      //         slug: page.attributes.slug,
      //         url: `https://bratislava.sk/${locale}/${page.attributes.slug}`,
      //         institutionsNarrowCount,
      //       });
      //     } else {
      //       othersMap.push({
      //         id: page.id,
      //         slug: page.attributes.slug,
      //         url: `https://bratislava.sk/${locale}/${page.attributes.slug}`,
      //         flatTextCount,
      //         institutionsCount,
      //         institutionsNarrowCount,
      //       });
      //     }
      //   });
      // }
    }
    // console.log(JSON.stringify(flatTextMap, null, 4));
    // console.log(institutionsMap);
    // console.log(institutionsNarrowMap);
    // console.log(othersMap);
  }
}

// async function byPage() {
//   const { pages } = await stagingClient.PageById({
//     id: '307',
//   })
//   const page = pages.data[0]
//
//   if (!page) {
//     console.log('no page')
//     return
//   }
//
//   const ComponentSectionsFileList = page.attributes.sections.filter(
//     (section) => section.__typename === 'ComponentSectionsFileList'
//   )
//
//   if (ComponentSectionsFileList.length) {
//     const oldSections = ComponentSectionsFileList.filter(
//       (section) => section.__typename === 'ComponentSectionsFileList' && !section.title
//     )
//     const newSections = ComponentSectionsFileList.filter(
//       (section) => section.__typename === 'ComponentSectionsFileList' && section.title
//     )
//
//     oldSections.map((section) => {
//       if (section.__typename === 'ComponentSectionsFileList') {
//         const fileList = section.fileList.map((file) => ({
//           category: file.category ?? '',
//           ...file,
//         }))
//         const grouped = groupBy(fileList, 'category')
//         console.log(grouped)
//
//         Object.keys(grouped).map((key) => {
//           const newSection = newSections.find(
//             (section) => section.__typename === 'ComponentSectionsFileList' && section.title === key
//           )
//
//           if (newSection && newSection.__typename === 'ComponentSectionsFileList') {
//             const newFileList = grouped[key]
//               .map((file) => {
//                 if (!file.media.data) {
//                   console.log(file)
//                   return null
//                 }
//                 return {
//                   title: file.title,
//                   category: file.category,
//                   media: file.media.data.id,
//                 }
//               })
//               .filter(Boolean)
//             // console.log(newFileList);
//
//             const data = {
//               sections: [
//                 ...page.attributes.sections,
//                 {
//                   id: newSection.id,
//                   __typename: 'ComponentSectionsFileList',
//                   fileList: newFileList,
//                 },
//               ],
//             } as PageInput
//             // console.log(data);
//             // stagingClient.UpdatePage({id: '935', data});
//           }
//         })
//       }
//     })
//   }
// }

// async function tags() {
//   const { tags } = await stagingClient.AllTags()
//   tags.data
//     .sort((tagA, tagB) => parseInt(tagA.id) - parseInt(tagB.id))
//     .map((tag) => {
//       console.log(tag.id, tag.attributes.title)
//     })
// }

sections()
// byPage();
// tags();
