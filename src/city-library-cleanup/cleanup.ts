import {localhostClient} from './gql';

async function pages() {
  for (const locale of ['sk', 'en']) {
    const allPagesResponse = await localhostClient.AllPages({locale});

    const allPages = allPagesResponse.pages.data;

    const pagesWithMultilineTitle = allPages.filter(page =>
      /\r|\n/.exec(page.attributes.title)
    );
    console.log(locale, 'multiline title:', pagesWithMultilineTitle);

    const pagesWithLongTitle = allPages.filter(
      page => page.attributes.title.length > 255
    );
    console.log(locale, 'long title:', pagesWithLongTitle);

    const pagesWithWrongSlug = allPages.filter(page =>
      /^[a-z0-9]+(?:-[a-z0-9/]+)*$/.exec(page.attributes.slug)
    );
    console.log(locale, 'wrong slug:', pagesWithLongTitle);
  }
}

pages();
