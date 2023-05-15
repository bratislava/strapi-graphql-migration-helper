import {stagingClient} from './gql';
import {SeoFragment} from '../graphql/city-library-staging';

function parseSeo(Seo: SeoFragment) {
  if (!Seo) return undefined;
  return {
    metaTitle: Seo.metaTitle,
    metaDescription: Seo.metaDescription?.trim().replace(/[\r\n]+/g, ' '),
    keywords: Seo.keywords?.trim().replace(/[\r\n]+/g, ', '),
  };
}

async function migrateSeo() {
  for (const locale of ['sk', 'en']) {
    // const allPages = await stagingClient.AllPagesWithSeo({locale});
    // for (const page of allPages.pages.data) {
    //   const seo = parseSeo(page.attributes.Seo);
    //   if (seo) {
    //     const {updatePage} = await localhostClient.UpdatePage({
    //       id: page.id,
    //       locale,
    //       data: {seo},
    //     });
    //     console.log(updatePage);
    //   }
    // }

    // const allEvents = await stagingClient.AllEventsWithSeo({locale});
    // for (const event of allEvents.events.data) {
    //   const seo = parseSeo(event.attributes.Seo);
    //   if (seo) {
    //     const {updateEvent} = await localhostClient.UpdateEvent({
    //       id: event.id,
    //       locale,
    //       data: {seo},
    //     });
    //     console.log(updateEvent);
    //   }
    // }

    // const allNotices = await stagingClient.AllNoticesWithSeo({locale});
    // for (const notice of allNotices.notices.data) {
    //   const seo = parseSeo(notice.attributes.seo);
    //   if (seo) {
    //     const {updateNotice} = await localhostClient.UpdateNotice({
    //       id: notice.id,
    //       locale,
    //       data: {seo},
    //     });
    //     console.log(updateNotice);
    //   }
    // }

    const allBlogPosts = await stagingClient.AllBlogPostsWithSeo({locale});
    for (const blogPost of allBlogPosts.blogPosts.data) {
      // const seo = parseSeo(blogPost.attributes.Seo);
      // if (seo) {
      //   const {updateBlogPost} = await localhostClient.UpdateBlogPost({
      //     id: blogPost.id,
      //     locale,
      //     data: {seo},
      //   });
      //   console.log(updateBlogPost);
      // }
    }
  }
}

migrateSeo();
