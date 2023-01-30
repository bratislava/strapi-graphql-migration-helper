import {localhostClient} from './gql';

// async function pagesFn() {
//   for (const locale of ['sk', 'en']) {
//     const pagesRes = await stagingClient.AllPagesWithSections({locale});
//     const pages = pagesRes.pages.data;
//
//     console.log(pages.length);
//
//     for (const page of pages) {
//       let perex = page.attributes.description?.trim();
//
//       if (perex?.startsWith('#')) {
//         perex = perex.slice(3);
//         // console.log(page.attributes.slug, '\n', perex, '\n-----');
//       }
//       const {updatePage} = await localhostClient.UpdatePage({
//         id: page.id,
//         locale,
//         data: {perex, description: page.attributes.description},
//       });
//       console.log(updatePage);
//
//       // console.log(page.attributes.layout);
//       // const sections = page.attributes.sections;
//       // const filteredSections = sections.filter(
//       //   section =>
//       //     section.__typename === 'ComponentSectionsFlatText' &&
//       //     section.media.data?.id
//       // );
//       // if (
//       //   filteredSections.length > 0 &&
//       //   filteredSections[0].__typename === 'ComponentSectionsFlatText'
//       // ) {
//       //   console.log(filteredSections.length, page.attributes.slug);
//       //   // console.log(page.attributes.listingImage.data?.id);
//       //   // const {updatePage} = await localhostClient.UpdatePage({
//       //   //   id: page.id,
//       //   //   locale,
//       //   //   data: {listingImage: filteredSections[0].media.data.id},
//       //   // });
//       //   // console.log(updatePage);
//       // }
//     }
//   }
// }

// async function deleteNewsPages() {
//   for (const locale of ['sk', 'en']) {
//     const {pages} = await localhostClient.AllNewsPages({locale});
//     for (const page of pages.data) {
//       // const {deletePage} = await localhostClient.DeletePage({
//       //   locale,
//       //   id: page.id,
//       // });
//     }
//   }
// }

async function addSlash() {
  for (const locale of ['sk', 'en']) {
    const {pages} = await localhostClient.AllPagesSlugs({locale});

    for (const page of pages.data) {
      if (page.attributes.slug !== '/') {
        const {updatePage} = await localhostClient.UpdatePage({
          id: page.id,
          locale,
          data: {slug: `/${page.attributes.slug}`},
        });
        console.log(updatePage);
      }
    }
  }
}

// pagesFn();
// deleteNewsPages();

// ●

addSlash();
