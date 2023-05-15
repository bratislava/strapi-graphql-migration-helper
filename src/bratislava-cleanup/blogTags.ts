import {stagingClient} from './gql';
import {BlogPostInput} from '../graphql/bratislava-staging';

async function blogTags() {
  const {tags} = await stagingClient.AllSkTags();
  const tagMap = new Map<string, string>();
  const tagTitleMap = new Map<string, string>();

  tags.data.map(tag => {
    const enTag = tag.attributes.localizations.data.find(
      tag => tag.attributes.locale === 'en'
    );
    // console.log(tag.id, tag.attributes.title, enTag.attributes.title);
    tagMap.set(tag.id, enTag.id);
    tagTitleMap.set(tag.attributes.title, enTag.attributes.title);
  });

  const {blogPosts} = await stagingClient.AllBlogPosts({locale: 'en'});

  let iterator = 1;

  for (const post of blogPosts.data) {
    if (post.attributes.tag?.data?.attributes) {
      const enTagId = tagMap.get(post.attributes.tag?.data.id);

      if (enTagId) {
        const data = {
          tag: enTagId,
        } as BlogPostInput;

        const {updateBlogPost} = await stagingClient.UpdateBlogPost({
          id: post.id,
          data,
        });

        console.log(
          iterator,
          updateBlogPost.data.id,
          updateBlogPost.data.attributes.tag.data.attributes.title
        );

        iterator += 1;
      }
    }
  }
}

blogTags();
