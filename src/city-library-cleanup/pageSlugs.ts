import {stagingClient} from './gql';

async function genNewSlugs() {
  for (const locale of ['sk', 'en']) {
    const {pages} = await stagingClient.AllPages({locale});
    for (const page of pages.data) {
      const newSlug = page.attributes.slug.split('/').pop();
      const {updatePage} = await stagingClient.UpdatePageSlug({
        newSlug,
        id: page.id,
      });
      console.log(
        page.id,
        updatePage.data.attributes.slug,
        updatePage.data.attributes.newSlug
      );
    }
  }
}

genNewSlugs();
