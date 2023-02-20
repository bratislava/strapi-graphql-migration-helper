import {stagingClient} from './gql';

async function migrateSections() {
  for (const locale of ['sk', 'en']) {
    const {pages} = await stagingClient.AllPagesWithSections({locale});

    for (const page of pages.data) {
      const docSections = page.attributes.sections.filter(
        section => section.__typename === 'ComponentSectionsDocuments'
      );

      for (const section of docSections) {
        if (section.__typename === 'ComponentSectionsDocuments') {
          // console.log(section.basicDocuments.data.length, page.id);
        }
      }
    }

    const {events} = await stagingClient.AllEventsWithDocuments({locale});

    for (const event of events.data) {
      if (event.attributes.documents) {
        console.log(
          event.attributes.documents.basicDocuments.data.length,
          event.id
        );
      }
    }
  }
}

migrateSections();
