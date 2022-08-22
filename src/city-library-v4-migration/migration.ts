import {PagesQuery} from '../graphql/city-library-v3';
import {sourceClient, targetClient} from '../utils/gql';
import {mapValues, omit, pickBy} from 'lodash';
import {EventInput} from '../graphql/city-library-v4';

// - fixes issues after library v3 -> v4 migration
// - moves events out of pages model into their own

const sample = {
  layout: 'event',
  id: '416',
  title: 'Letné folkovanie',
  slug: 'zazite/podujatia/Letne-folkovanie',
  sections: [
    {
      id: '211',
      price: 0,
      partners: [],
      dateFrom: '2014-07-23T18:00:00.000Z',
      dateTo: '2014-07-23T18:00:00.000Z',
      eventCategory: null,
      eventCoverImage: null,
      eventDescription:
        'Účinkujú: Peter Janků, Soňa Horňáková, Mirka Miškechová Projekt Hudba U červeného raka S finančnou podporou MK SR',
      eventLocality: {id: '18'},
      eventTags: [],
      eventTitle: 'Letné folkovanie',
      guests: [],
    },
  ],
  relatedBlogPosts: null,
  published_at: '2022-04-27T11:43:01.129Z',
  promoted: null,
  pageCategory: {id: '21'},
  description:
    'Účinkujú: Peter Janků, Soňa Horňáková, Mirka Miškechová Projekt Hudba U červeného raka S finančnou podporou MK SR',
  date_added: null,
  created_at: '2022-04-27T11:43:01.212Z',
  blogPosts: [],
  Seo: {
    canonicalURL: null,
    id: '378',
    keywords: null,
    metaDescription:
      'Účinkujú: Peter Janků, Soňa Horňáková, Mirka Miškechová Projekt Hudba U červeného raka S finančnou podporou MK SR',
    metaRobots: null,
    metaTitle: 'Letné folkovanie',
    metaViewport: null,
  },
};

const a: EventInput | null = null;

const events = async () => {
  // doing the first iteration outside for-loop so that we get types correctly
  const firstPages = await sourceClient.Pages({start: 100});
  // console.dir(firstPages, {depth: 10});
  const events = firstPages.pages.filter(
    p => p.sections?.[0]?.__typename === 'ComponentSectionsEventDetails'
  );
  const mappedEvents = mapValues(events, (e: typeof events[0]) => {
    if (e.sections?.[0]?.__typename === 'ComponentSectionsEventDetails') {
      return pickBy({
        Seo: omit(e.Seo, ['id', '__typename']),
        coverImage: e.sections[0].eventCoverImage?.id,
        // TODO validate there are no events with multiple sections
        dateFrom: e.sections[0].dateFrom,
        dateTo: e.sections[0].dateTo,
        date_added: e.date_added || e.published_at.toString().slice(0, 10),
        description: e.sections[0].eventDescription,
        eventCategory: e.sections[0].eventCategory?.id,
        eventLocality: e.sections[0].eventLocality?.id,
        eventTags: e.sections[0].eventTags.map(t => t.id),
        guests: e.sections[0].guests.map(g => g.id),
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
    } else throw new Error('Unexpected!');
  });

  // TODO fix localizations

  // const e = events[0]
  // for (let i = 0; i < 1; i++) {
  //   // TODO 24
  //   const newPages = await sourceClient.Pages({start: i});
  // }
  // console.log(events);
  console.dir(events[0], {depth: null});
  console.log('go!!!!!!!!!!!!!!!');
  await targetClient.MyMutation({data: mappedEvents[0]});
  console.log('----------');
  // console.log(mappedEvents[0]);
  // TODO continue here - get one eng and one svk page, connect them - remove page by id
};

events();
