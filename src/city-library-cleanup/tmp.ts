import {localhostClient} from './gql';

async function pagesSections() {
  const {pages} = await localhostClient.AllPagesWithSections({locale: 'sk'});

  pages.data.map(page => {
    if (
      page.attributes.sections.filter(
        section => section.__typename === 'ComponentSectionsFlatText'
      ).length > 0
    ) {
      console.log(page.attributes.slug);
    }
  });
}

pagesSections();
