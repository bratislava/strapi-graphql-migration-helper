import {localhostClient, stagingClient} from './gql';
import slugify from 'slugify';

/* The goal was to make title and slug required, slug bing to title, title converted from long text to short text.
 *
 * The approach:
 * I check few assumptions:
 * - if some title contains new lines - none
 * - if some title is longer than 256 characters - none
 * - if some title is empty - none
 * - is some slug is empty - none
 * - if some slug contains special characters - a lot
 * - id some slugs are not unique - few, manually fixed in Strapi
 * Then the 'zazite/podujatia' part was removed from slugs. Slugify function was used on slugs to get then in good shape.
 * Some new slugs were created manually in Strapi or by increasing the suffix.
 * I exported a list of changed slug - to create Next redirects.
 *
 * This is not a perfect documentation, the code was changed during the process and some data was changed manually.
 * */

/**
 * This function cleans up badly formatted slugs.
 * @param str
 */
function mySlugify(str: string) {
  // This is original slugify function used in Strapi. I used mySlugify because there was some error with import using bun.
  // import slugify from '@sindresorhus/slugify';

  const nonWordCharacters = /([^a-zA-Z0-9-])/gm;
  return str
    .replace(nonWordCharacters, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

export const events = async () => {
  for (const locale of ['sk', 'en']) {
    const allEventsResponse = await stagingClient.AllEvents({locale});

    const allEvents = allEventsResponse.events.data.map(event => event);

    // const allSlugs = allEvents.map(event => event.attributes.slug);
    // const problematicSlugs = allSlugs.filter(
    //   slug =>
    //     !slug.startsWith(
    //       locale === 'sk' ? 'zazite/podujatia' : 'experience/events'
    //     )
    // );
    // console.log(locale, 'problematic slugs:', problematicSlugs);
    //
    // const duplicateSlugs = allSlugs.filter(
    //   (slug, index) => allSlugs.indexOf(slug) !== index
    // );
    // console.log(locale, 'duplicate slugs:', duplicateSlugs);
    //
    // const eventsWithoutSlug = allEvents.filter(event => !event.attributes.slug);
    // console.log(locale, 'events without slug:', eventsWithoutSlug);
    //
    // const eventsWithoutTitle = allEvents.filter(
    //   event => !event.attributes.title.trim()
    // );
    // console.log(locale, 'events without title:', eventsWithoutTitle);
    //
    // const eventsWithMultilineTitle = allEvents.filter(event =>
    //   /\r|\n/.exec(event.attributes.title)
    // );
    // console.log(locale, 'multiline title:', eventsWithMultilineTitle);
    //
    // const eventsWithLongTitle = allEvents.filter(
    //   event => event.attributes.title.length > 255
    // );
    // console.log(locale, 'long title:', eventsWithLongTitle);

    // const eventsMultispace = allEvents.filter(event =>
    //   /\s{2,}/.exec(event.attributes.title)
    // );
    // console.log(locale, 'more spaces title:', eventsMultispace);

    // const eventsSlugsSpecialCh = allEvents.map(({id, attributes}) => {
    //
    // });
    // console.log(locale, 'more spaces title:', eventsSlugsSpecialCh);

    for (const event of allEvents) {
      const shortSlug = event.attributes.slug.split('/').slice(2).join('/');
      const oldTitle = event.attributes.title;

      const newTitle = oldTitle
        // .replace(/(\r?\n|\r)/gm, ' ') // no newlines are present in titles
        .replace(/(\s{2,})/gm, ' ')
        .trim();

      const newSlug = mySlugify(shortSlug);
      // if (shortSlug !== newSlug) {
      //   console.log(shortSlug, newSlug);
      // }

      // We have no multiline titles
      // const match = /\r|\n/.exec(oldTitle);
      // const titleToShow = match ? event.attributes.title.trim() : '';

      // console.log(shortSlug, newTitle);
      try {
        const updatedEvent = await localhostClient.UpdateEvent({
          id: event.id,
          oldSlug: event.attributes.slug,
          newSlug: newSlug,
          newTitle: newTitle,
        });
        // console.log(updatedEvent.updateEvent.data);
      } catch (e) {
        console.log(event.id, event.attributes.slug, newSlug);
      }
    }
  }
};

async function addMissingSlugs() {
  for (const locale of ['sk', 'en']) {
    const eventsWitMissingSlug = await localhostClient.EventsWithNoSlug({
      locale,
    });

    const allEventsResponse = await stagingClient.AllEvents({locale});

    for (const event of eventsWitMissingSlug.events.data) {
      const title = event.attributes.title;
      const newSlug = mySlugify(slugify(title)) + '-1';

      const oldEvent = allEventsResponse.events.data.find(
        eventInner => eventInner.id === event.id
      );
      // console.log(event.id, newSlug, oldSlug);
      try {
        const updatedEvent = await localhostClient.UpdateEvent({
          id: event.id,
          oldSlug: oldEvent.attributes.slug,
          newSlug: newSlug,
        });
        // console.log(updatedEvent.updateEvent.data);
      } catch (e) {
        console.log(event.id, oldEvent.attributes.slug, newSlug);
      }
    }
  }
}

async function getAllSlugs() {
  for (const locale of ['sk', 'en']) {
    const allEvents = await localhostClient.AllLocalhostEvents({locale});
    const oldEvents = await stagingClient.AllEvents({locale});
    allEvents.events.data.forEach(event => {
      const oldEvent = oldEvents.events.data.find(
        eventOld => eventOld.id === event.id
      );
      console.log(event.id, event.attributes.slug, oldEvent.attributes.slug);
    });
  }
}

// events();

// I have run this script few times with manually increasing appendix to fix all slugs
// addMissingSlugs();

// getAllSlugs();
