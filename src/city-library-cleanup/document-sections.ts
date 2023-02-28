import {stagingClient} from './gql';

async function migrateSections() {
  for (const locale of ['sk', 'en']) {
    const {pages} = await stagingClient.AllPagesWithSections({locale});

    for (const page of pages.data) {
      const docSections = page.attributes.sections.filter(
        section => section.__typename === 'ComponentSectionsDocuments'
      );
      const sublistingSections = page.attributes.sections.filter(
        section => section.__typename === 'ComponentSectionsSubListing'
      );

      if (sublistingSections.length) {
        console.log(page.id, 'has sublisting');
      }

      for (const section of docSections) {
        if (section.__typename === 'ComponentSectionsDocuments') {
          console.log(section.moreLink, page.id);
        }
      }
    }

    const {events} = await stagingClient.AllEventsWithDocuments({locale});

    for (const event of events.data) {
      if (event.attributes.documents) {
        console.log(
          event.id,
          event.attributes.documents.basicDocuments.data.map(doc => doc.id)
        );
      }
    }

    const {notices} = await stagingClient.AllNoticesWithDocuments({locale});

    for (const notice of notices.data) {
      if (notice.attributes.documents) {
        const oldDocs = notice.attributes.documents.basicDocuments.data.map(
          doc => doc.attributes.slug
        );
        // console.log(oldDocs);
        const docIDs = [];
        for (const oldDocSlug of oldDocs) {
          const {documents} = await stagingClient.DocumentBySlug({
            slug: oldDocSlug,
          });
          const newDoc = documents.data[0];
          docIDs.push(newDoc.id);
        }
        // console.log(notice.attributes.documents.moreLink);
      }
    }
  }
}

migrateSections();
