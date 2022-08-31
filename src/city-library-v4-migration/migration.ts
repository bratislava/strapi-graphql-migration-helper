import {PagesQuery} from '../graphql/city-library-v3';
import {sourceClient, targetClient} from '../utils/gql';
import {mapValues, omit, pickBy} from 'lodash';
import {EventInput} from '../graphql/city-library-v4';

// - fixes issues after library v3 -> v4 migration
// - moves events out of pages model into their own

const events = async () => {
  // doing the first iteration outside for-loop so that we get types correctly
  const firstPages = await sourceClient.Pages({start: 0, locale: 'sk'});
  // console.dir(firstPages, {depth: 10});
  let events = firstPages.pages.filter(
    // checking p.layout === 'event' should be the same as checking for first section being 'ComponentSectionsEventDetails'
    // p => p.sections?.[0]?.__typename === 'ComponentSectionsEventDetails'
    p => p.layout === 'event'
  );

  for (let i = 1; i < 25; i++) {
    console.log('Collecting pages - ', i * 100);
    const newPages = await sourceClient.Pages({start: i * 100, locale: 'sk'});
    events = events.concat(
      newPages.pages.filter(
        // p => p.sections?.[0]?.__typename === 'ComponentSectionsEventDetails'
        p => p.layout === 'event'
      )
    );
  }

  console.log('Filtered num of event pages: ', events.length);

  const mappedEvents = events.map(e => {
    // validating assumptions from MKD-531:
    // All of pages with the event layout should contain eventDetails section.
    // Some of pages with event layout can contain 1 form section after eventDetails section.
    // If the page contains form section, it should be just 1 form section.
    // The type of form in form section should always be "detail_podujatia".
    if (e.sections?.[0]?.__typename === 'ComponentSectionsEventDetails') {
      e.sections.forEach(section => {
        // validating
        if (section.__typename === 'ComponentSectionsForm') {
          console.log('Found form of a type: ', section.type);
        }
        if (
          section.__typename !== 'ComponentSectionsForm' &&
          section.__typename !== 'ComponentSectionsEventDetails'
        ) {
          console.log(
            'Warning! Found event page with section: ',
            section.__typename
          );
        }
      });
      if (e.sections?.length > 2) {
        console.log('Warning! Found event page with more than 2 sections!');
        console.log(e.sections);
        console.log(e.slug);
      }
      return pickBy({
        id: e.id, // will be omitted later
        Seo: omit(e.Seo, ['id', '__typename']),
        coverImage: e.sections[0].eventCoverImage?.id,
        dateFrom: e.sections[0].dateFrom,
        dateTo: e.sections[0].dateTo,
        date_added: e.date_added || e.published_at.toString().slice(0, 10),
        description: e.sections[0].eventDescription,
        eventCategory: e.sections[0].eventCategory?.id,
        eventLocality: e.sections[0].eventLocality?.id,
        eventTags: e.sections[0].eventTags.map(t => t.id),
        guests: e.sections[0].guests.map(g => omit(g, 'id')),
        listingImage: e.listingImage?.id,
        price: e.sections[0].price,
        promoted: e.promoted,
        publishedAt: e.published_at,
        showForm: !!e.sections.find(
          s => s.__typename === 'ComponentSectionsForm'
        ), // TODO verify
        slug: e.slug,
        title: e.sections[0].eventTitle,
      });
      // else there is a layout === 'event' page without ComponentSectionsEventDetails section
    } else throw new Error('Unexpected!');
  });

  console.log('Successfully mapped events: ', mappedEvents.length);

  const problematicSlugs = [
    // enter any causing errors which should be skipped over
  ];

  const problematicEng = [
    // enter any causing errors which should be skipped over
  ];

  for (const e of mappedEvents) {
    // skip existing events
    let slug = e.slug;
    const v4SvkEvent = await targetClient.EventsBySlug({
      slug: slug,
    });
    if (problematicSlugs.indexOf(slug) !== -1) {
      console.log('Skipping problematic! ', slug);
      continue;
    }
    console.log('Fixing problematic: ', slug);
    if (v4SvkEvent.events?.data.length) {
      console.log('Duplicate slug: ', slug);
      slug = `${slug}-${e.id}`;
      console.log('Appending v3 id, saving as: ', slug);
      continue;
    }
    const result = await targetClient.CreateSvkLocaleEvent({
      data: omit(e, 'id'),
    });
    // console.log('Written svk event: ', slug);
  }

  // ENGLISH

  console.log('');
  console.log('###########');
  console.log('# ENGLISH #');
  console.log('###########');
  console.log('');

  const enPages = await sourceClient.Pages({start: 0, locale: 'en'});
  // console.dir(firstPages, {depth: 10});
  const enEvents = enPages.pages.filter(p => p.layout === 'event');
  const enMappedEvents = enEvents.map(e => {
    // same validation as above
    if (e.sections?.[0]?.__typename === 'ComponentSectionsEventDetails') {
      e.sections.forEach(section => {
        // validating
        if (section.__typename === 'ComponentSectionsForm') {
          console.log('Found form of a type: ', section.type);
        }
        if (
          section.__typename !== 'ComponentSectionsForm' &&
          section.__typename !== 'ComponentSectionsEventDetails'
        ) {
          console.log(
            'Warning! Found event page with section: ',
            section.__typename
          );
        }
      });
      if (e.sections?.length > 2) {
        console.log('Warning! Found event page with more than 2 sections!');
        console.log(e.sections);
      }
      return pickBy({
        Seo: omit(e.Seo, ['id', '__typename']),
        coverImage: e.sections[0].eventCoverImage?.id,
        dateFrom: e.sections[0].dateFrom,
        dateTo: e.sections[0].dateTo,
        date_added: e.date_added || e.published_at.toString().slice(0, 10),
        description: e.sections[0].eventDescription,
        eventCategory: e.sections[0].eventCategory?.id,
        eventLocality: e.sections[0].eventLocality?.id,
        eventTags: e.sections[0].eventTags.map(t => t.id),
        guests: e.sections[0].guests.map(g => omit(g, 'id')),
        listingImage: e.listingImage?.id,
        price: e.sections[0].price,
        promoted: e.promoted,
        publishedAt: e.published_at,
        showForm: !!e.sections.find(
          s => s.__typename === 'ComponentSectionsForm'
        ),
        slug: e.slug,
        title: e.sections[0].eventTitle,
        // this one is our custom used for matching and will be filtered out
        svkLocalizationSlug: e.localizations?.[0]?.slug,
      });
      // else there is a layout === 'event' page without ComponentSectionsEventDetails section
    } else throw new Error('Unexpected!');
  });
  for (const e of enMappedEvents) {
    if (problematicEng.indexOf(e.slug) !== -1) {
      console.log('Skipping problematic! ', e.slug);
      continue;
    }
    if (!e.svkLocalizationSlug) {
      console.log('No svk slug for event: ', e.slug);
    }
    const v4SvkEvent = await targetClient.EventsBySlug({
      slug: e.svkLocalizationSlug,
    });
    if (!v4SvkEvent.events?.data.length) {
      console.log('Warning! No svk event to assing this event to: ', e.slug);
    } else {
      // assuming unique slugs
      const foundEvent = v4SvkEvent.events.data[0];
      const result = await targetClient.CreateEnLocalizationEvent({
        data: omit(e, 'svkLocalizationSlug'),
        id: foundEvent.id,
      });
      console.log('Written english event: ', e.title);
    }
  }
};

const tables = async (locale: string) => {
  // doing the first iteration outside for-loop so that we get types correctly
  const firstPages = await sourceClient.Pages({start: 0, locale});
  // console.dir(firstPages, {depth: 10});
  let tablePages = firstPages.pages.filter(p =>
    p.sections?.find(s => s.__typename === 'ComponentSectionsTable')
  );
  for (let i = 1; i < 25; i++) {
    console.log('Collecting pages - ', i * 100);
    const newPages = await sourceClient.Pages({start: i * 100, locale});
    tablePages = tablePages.concat(
      newPages.pages.filter(p =>
        p.sections?.find(s => s.__typename === 'ComponentSectionsTable')
      )
    );
  }
  console.log('Found pages with table sections: ', tablePages.length);
  // console.dir(await sourceClient.Page({id: '69'}), {depth: 10});

  for (const p of tablePages) {
    const v4SvkPage = await targetClient.PagesBySlug({
      slug: p.slug,
      locale,
    });
    const v4Page = v4SvkPage?.pages?.data[0];
    if (!v4Page?.id) {
      console.log('Warning! No page found for: ', p.slug);
    } else {
      // assuming unique slugs
      const sections = v4Page.attributes.sections.map(s => {
        // appease the typescript gods
        // console.log(s.__typename);
        if (s.__typename === 'ComponentSectionsTable') {
          const v3Section = p.sections.find(
            ps => ps.__typename === 'ComponentSectionsTable' && ps.id === s.id
          );
          if (!v3Section) {
            console.log('Warning! Did not find section for slug: ', p.slug);
            return s;
          }
          // appease ts gods
          if (v3Section.__typename === 'ComponentSectionsTable') {
            return {
              __typename: v3Section.__typename,
              primaryTitle: v3Section.primaryTitle,
              secondaryTitle: v3Section.secondaryTitle,
              rows: v3Section.rows.map(r => omit(r, ['id'])),
            };
          } else throw new Error('Unexpected!');
        } else {
          return s;
        }
      });
      await targetClient.UpdatePageSections({id: v4Page.id, sections});
      console.log(`Succesfully updated page id: ${v4Page.id} slug: ${p.slug}`);
    }
  }
};

// events();
// tables('sk');
// tables('en');
//

// a backup copy from earlier, to be removed if all is fine
// const tables = async (locale: string) => {
//   // doing the first iteration outside for-loop so that we get types correctly
//   const firstPages = await sourceClient.Pages({start: 0, locale});
//   // console.dir(firstPages, {depth: 10});
//   let tablePages = firstPages.pages.filter(p =>
//     p.sections?.find(s => s.__typename === 'ComponentSectionsTable')
//   );
//   for (let i = 2; i < 25; i++) {
//     console.log('Collecting pages - ', i * 100);
//     const newPages = await sourceClient.Pages({start: i * 100, locale});
//     tablePages = tablePages.concat(
//       newPages.pages.filter(p =>
//         p.sections?.find(s => s.__typename === 'ComponentSectionsTable')
//       )
//     );
//   }
//   console.log('Found pages with table sections: ', tablePages.length);
//   // console.dir(await sourceClient.Page({id: '69'}), {depth: 10});

//   for (const p of tablePages) {
//     const v4SvkPage = await targetClient.PagesBySlug({
//       slug: p.slug,
//       locale,
//     });
//     const v4Page = v4SvkPage?.pages?.data[0];
//     if (!v4Page?.id) {
//       console.log('Warning! No page found for: ', p.slug);
//     } else {
//       // assuming unique slugs
//       const sections = v4Page.attributes.sections.map(s => {
//         // appease the typescript gods
//         // console.log(s.__typename);
//         if (s.__typename === 'ComponentSectionsTable') {
//           const v3Section = p.sections.find(
//             ps => ps.__typename === 'ComponentSectionsTable' && ps.id === s.id
//           );
//           if (!v3Section) {
//             console.log('Warning! Did not find section for slug: ', p.slug);
//             return s;
//           }
//           // appease ts gods
//           if (v3Section.__typename === 'ComponentSectionsTable') {
//             return {
//               __typename: v3Section.__typename,
//               primaryTitle: v3Section.primaryTitle,
//               secondaryTitle: v3Section.secondaryTitle,
//               rows: v3Section.rows.map(r => omit(r, ['id'])),
//             };
//           } else throw new Error('Unexpected!');
//         } else {
//           return s;
//         }
//       });
//       await targetClient.UpdatePageSections({id: v4Page.id, sections});
//       console.log(`Succesfully updated page id: ${v4Page.id} slug: ${p.slug}`);
//     }
//   }
// };
