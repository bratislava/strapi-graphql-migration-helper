import {localhostClient, stagingClient} from './gql';
import {NoticeInput} from '../graphql/city-library-localhost';
import slugify = require('@sindresorhus/slugify');

function mySlugify(string: string) {
  return slugify(string, {
    customReplacements: [
      ['ä', 'a'],
      ['ö', 'o'],
      ['ü', 'u'],
    ],
  });
}

const monthsInSk = [
  'január',
  'február',
  'marec',
  'apríl',
  'máj',
  'jún',
  'júl',
  'august',
  'september',
  'október',
  'november',
  'december',
];

async function notices() {
  // for loop is here just for comfort, e.g. when I wanted to run some checks against both locals
  for (const locale of ['sk']) {
    const newsResponse = await stagingClient.AllPagesBySlugContains({
      locale,
      slugPrefix: locale === 'sk' ? 'zazite/aktuality/' : 'experience/news/',
    });

    const news = newsResponse.pages.data;

    // Check whether the slug is correct
    // EN was checked by switching locale in for loop
    // This was manually corrected in db
    for (const newsItem of news) {
      const oldSlug = newsItem.attributes.slug.split('/').slice(2)[0];
      const newSlug = mySlugify(oldSlug);
      if (oldSlug !== newSlug) {
        console.log(oldSlug, newSlug);
      }
    }

    for (const newsPage of news) {
      // if (newsPage.id !== '2373') {
      //   continue;
      // }
      // console.log(newsPage.id);

      const {
        slug,
        // description,
        // promoted,
        title,
        // date_added,
        publishedAt,
        Seo,
        listingImage,
      } = newsPage.attributes;

      const newSlug = slug.split('/').slice(2)[0];

      // we skip this pages because they belong to blog posts or have weird format
      if (
        newSlug === 'trening-mozgu-trening-pamati-marec-2022' ||
        newSlug === 'mestska-kniznica-v-bratislave-odpocet-2021' ||
        newSlug === 'vypocujte-si-podcast-o-knihach-ktore-cita-cela-rodina' ||
        newSlug === 'ochrana-osobnych-udajov-c18-2018'
      ) {
        continue;
      }

      // Check whether the page has text in flatText section instead of description
      // EN was checked by switching locale in for loop
      // This was manually corrected in db
      const flatTextSections = newsPage.attributes.sections.filter(
        section => section.__typename === 'ComponentSectionsFlatText'
      );
      if (
        flatTextSections.length &&
        flatTextSections[0].__typename === 'ComponentSectionsFlatText' &&
        flatTextSections[0]?.content
      ) {
        console.log(newSlug, flatTextSections[0].content.slice(0, 50));
      }

      const docSections = newsPage.attributes.sections.filter(
        section => section.__typename === 'ComponentSectionsDocuments'
      );

      if (docSections.length > 1) {
        console.log('Skipping', newSlug, 'because it has more doc sections');
        continue;
      }

      // No EN page had documents, so we can leave this code block here just for SK pages
      // let docs: ComponentBlocksFileItemInput[] = [];

      // if (
      //   docSections.length === 1 &&
      //   docSections[0].__typename === 'ComponentSectionsDocuments'
      // ) {
      //   docs = docSections[0].basicDocuments.data.map(doc => ({
      //     // they use this "very long dash" '—' sometimes
      //     name: doc.attributes.title.replace(/—/g, '–').trim(),
      //     attachment: doc.attributes.attachment.data.id,
      //   }));
      //   // Sort "Knižné novinky" by months and years descending
      //   // Document names are in format "Knižné novinky – marec 2020"
      //   if (newsPage.id === '249') {
      //     docs.sort((a, b) => {
      //       return (
      //         parseInt(b.name.slice(-4)) - parseInt(a.name.slice(-4)) ||
      //         monthsInSk.indexOf(b.name.split(' ')[3]) -
      //           monthsInSk.indexOf(a.name.split(' ')[3])
      //       );
      //     });
      //   }
      //   if (docs.length) {
      //     // console.log(newSlug, docs);
      //     console.log(docs?.length > 0 ? docs : null);
      //   }
      // }

      // const newPublishedAt = date_added
      //   ? date_added + publishedAt.slice(10)
      //   : publishedAt;
      //
      // const data = {
      //   body: parseDescription(description),
      //   dateAdded: date_added,
      //   listingImage: [listingImage.data?.id].filter(Boolean),
      //   promoted,
      //   publishedAt: newPublishedAt,
      //   seo: omit(Seo, ['id', '__typename']),
      //   slug: mySlugify(newSlug),
      //   title: title.trim(),
      //   files: docs?.length > 0 ? {files: docs} : null,
      // } as NoticeInput;

      // const enPage = newsPage.attributes.localizations.data.filter(
      //   localization => localization.attributes.locale === 'en'
      // )[0];
      //
      // const newSlugEn = enPage?.attributes.slug.split('/').slice(2)[0];
      //
      // let dataEn: NoticeInput = null;
      // if (enPage) {
      //   dataEn = {
      //     body: parseDescription(enPage.attributes.description),
      //     dateAdded: date_added,
      //     listingImage: [listingImage.data?.id].filter(Boolean),
      //     promoted,
      //     publishedAt: newPublishedAt,
      //     seo: omit(enPage.attributes.Seo, ['id', '__typename']),
      //     // just in case
      //     slug: mySlugify(newSlugEn),
      //     title: enPage.attributes.title.trim(),
      //   };
      //   // console.log(data);
      // }

      // console.log(newSlug);
      //
      // let skNoticeId: string = null;
      //
      // try {
      //   const {createNotice} = await localhostClient.CreateSkNotice({data});
      //   skNoticeId = createNotice.data.id;
      //   console.log(createNotice);
      // } catch (e) {
      //   console.error('ERR', newSlug, e.response.errors[0].message);
      //
      //   const {notices} = await localhostClient.NoticeBySlug({
      //     slug: newSlug,
      //     locale: 'sk',
      //   });
      //   const noticeExistingId = notices.data[0].id;
      //   const {updateNotice} = await localhostClient.UpdateNotice({
      //     data,
      //     id: noticeExistingId,
      //     locale: 'sk',
      //   });
      //   skNoticeId = updateNotice.data.id;
      //   if (updateNotice) {
      //     console.log('Updated exiting sk id', updateNotice.data.id);
      //   }
      // }
      //
      // // console.log(enPage);
      //
      // if (enPage && dataEn) {
      //   console.log('sk id', skNoticeId, 'en old id', enPage.id);
      //
      //   try {
      //     const {createNoticeLocalization} =
      //       await localhostClient.CreateEnLocalizationNotice({
      //         data: dataEn,
      //         id: skNoticeId,
      //       });
      //     console.log(createNoticeLocalization);
      //   } catch (e) {
      //     console.error('ERR', newSlugEn, e.response.errors[0].message);
      //
      //     const {notices} = await localhostClient.NoticeBySlug({
      //       slug: newSlugEn,
      //       locale: 'en',
      //     });
      //     const noticeExistingId = notices.data[0]?.id;
      //
      //     const {updateNotice} = await localhostClient.UpdateNotice({
      //       data: dataEn,
      //       id: noticeExistingId,
      //       locale: 'en',
      //     });
      //     skNoticeId = updateNotice.data.id;
      //     if (updateNotice) {
      //       console.log('Updated exiting en id', updateNotice.data.id);
      //     }
      //   }
      // }
    }
  }
  return;
}

async function getNotice() {
  const {notice} = await localhostClient.NoticeById({id: '1'});
  console.log(notice);
}

/**
 * Replaces numbering in format "1/, 2/, ..." by "1., 2., ..." for markdown compatibility
 * Replaces bullets by dashes for markdown compatibility
 * @param description
 */
function parseDescription(description: string | null | undefined) {
  if (!description) {
    return description;
  }
  return description
    .replace(/•/g, '-')
    .replace(/(\d)\/ /g, '$1. ')
    .trim();
}

async function updateNotices() {
  const pages = await stagingClient.AllPagesBySlugContains({
    locale: 'sk',
    slugPrefix: 'zazite/aktuality/knizne-novinky-februar-2016-januar-2021',
  });

  const newBooksPage = pages.pages.data[0];

  const docSections = newBooksPage.attributes.sections.filter(
    section => section.__typename === 'ComponentSectionsDocuments'
  );

  if (docSections.length > 1) {
    console.log('error');
  }

  if (
    docSections.length === 1 &&
    docSections[0].__typename === 'ComponentSectionsDocuments'
  ) {
    const docs = docSections[0].basicDocuments;
    console.log(docs);
    // Sort "Knižné novinky" by months and years descending
    // Document names are in format "Knižné novinky – marec 2020"
    const newDocs = docs.data.sort((a, b) => {
      return (
        parseInt(b.attributes.title.slice(-4)) -
          parseInt(a.attributes.title.slice(-4)) ||
        monthsInSk.indexOf(b.attributes.title.split(' ')[3]) -
          monthsInSk.indexOf(a.attributes.title.split(' ')[3])
      );
    });

    // console.log(newDocs);

    const newData = {
      documents: {title: '', basicDocuments: newDocs.map(doc => doc.id)},
    } as NoticeInput;
    const {updateNotice} = await localhostClient.UpdateNotice({
      locale: 'sk',
      id: '28',
      data: newData,
    });
    console.log(updateNotice);
  }
}

async function updateBlogPost() {
  const {page} = await stagingClient.PageById({
    locale: 'sk',
    id: '264',
  });

  const treningPage = page.data;

  const sections = treningPage.attributes.sections;

  const newSection = sections
    .map(section => {
      if (section.__typename === 'ComponentSectionsFlatText') {
        return {
          __typename: 'ComponentSectionsFlatText',
          content: section.content,
        };
      }
      if (section.__typename === 'ComponentSectionsDocuments') {
        return {
          __typename: 'ComponentSectionsDocuments',
          title: section.title,
          basicDocuments: section.basicDocuments.data.map(doc => doc.id),
        };
      }
      if (section.__typename === 'ComponentSectionsVideo') {
        return {
          __typename: 'ComponentSectionsVideo',
          youtube_url: section.youtube_url,
        };
      }
    })
    .filter(Boolean);

  // console.log(newDocs);

  const newData = {
    sections: newSection ?? [],
  };

  const {updateBlogPost} = await localhostClient.UpdateBlogPost({
    locale: 'sk',
    id: '15',
    data: newData,
  });
  console.log(updateBlogPost);
}

// getNotice();

// notices();

// updateNotices();

updateBlogPost();
