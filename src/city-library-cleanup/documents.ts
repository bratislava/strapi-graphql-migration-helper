import {localhostClient, stagingClient} from './gql';
import {
  DisclosureInput,
  DocumentInput,
  Enum_Disclosure_Type,
} from '../graphql/city-library-localhost';
import {
  isUniqueSlug,
  mySlugify,
  parseFakturyTitle,
  parseObjednavkyTitle,
} from './documents-helpers';

const disclosureCategories = [
  'faktury',
  'zmluvy',
  'objednavky',
  'verejne-obstaravanie',
  'obchodna-verejna-sutaz',
  'granty',
  'ostatne',
];

const otherCategories = [
  'cenniky',
  'interne-dokumenty',
  'metodicke-dokumenty-a-zakony',
  'prednasky',
  'predpisy-a-smernice',
  'prieskumy',
  'prihlasky',
  'spravy-o-cinnosti',
  'treningy-a-cvicenia',
];

async function documentCategories() {
  const {fileCategories} = await stagingClient.AllFileCategories();
  for (const category of fileCategories.data) {
    const {slug} = category.attributes;
    if (disclosureCategories.includes(slug)) {
      // we don't want to create these categories, they belong to Disclosures
      continue;
    }
    const {documentCategories} = await localhostClient.DocumentCategoryBySlug({
      slug,
    });
    if (documentCategories.data.length !== 0) {
      // category already exists
      continue;
    }
    await localhostClient.CreateDocumentCategory({
      data: {
        label: category.attributes.name,
        slug: category.attributes.slug,
      },
    });
  }
}

async function documents() {
  const {documentCategories} = await localhostClient.AllDocumentCategories();
  const categoryMap = new Map<string, string>();
  documentCategories.data.forEach(cat => {
    categoryMap.set(cat.attributes.slug, cat.id);
  });

  const {basicDocuments} = await stagingClient.AllBasicDocuments({
    categorySlugs: otherCategories,
  });

  console.log('Fetched documents count:', basicDocuments.data.length);

  for (const doc of basicDocuments.data) {
    const {
      title: oldTitle,
      slug: oldSlug,
      description: oldDescription,
      file_category,
      attachment,
      date_added,
      publishedAt: oldPublishedAt,
      metadata,
    } = doc.attributes;
    let title = oldTitle.trim();
    let description = oldDescription?.trim();
    const category = file_category.data?.attributes;
    let publishedAt = oldPublishedAt;
    const addedAt = date_added
      ? date_added + publishedAt.slice(10)
      : publishedAt;
    const fileId = attachment.data?.id;
    const fileName = attachment.data?.attributes?.name;

    if (!fileId) {
      await stagingClient.UnpublishBasicDocument({id: doc.id});
    }

    // if (date_added === '1970-01-01') {
    //   console.log(doc.id, title, 'date_added'); // none found
    // }

    // Check if description contains newlines, manually fixed in prod db
    if (description?.match(/[\r\n]+/g)) {
      console.log(doc.id, title, '\n', description);
    }

    // Check if description is too long for short text, manually fixed in prod db
    if (description?.length > 255) {
      console.log(doc.id, title, '\n', description);
    }

    // Check if description is the same as title, if true, set description to null, we don't want duplicate info
    if (title === description) {
      description = null;
    }

    // Fixed manually in prod db
    if (!category) {
      console.log(doc.id, title, 'no category');
    }

    if (!fileId) {
      publishedAt = null;
      // console.log(doc.id, title, 'no attachment');
    }

    if (!disclosureCategories.includes(category.slug)) {
      // Add new category for trainings and exercises, before they had "Iné"
      if (title.match(/tréning|cvičeni|trening|cviceni/gi)) {
        category.slug = 'treningy-a-cvicenia';
      }

      // Check if document have metadata for some reason - none had metadata
      if (metadata.length) {
        console.log(doc.id, title);
      }

      isUniqueSlug(oldSlug, doc.id); // manually fixed by unpublishing or renaming duplicates
      // checkForUniqueFile(fileId, doc.id); // manually fixed by unpublishing or renaming duplicates

      const data = {
        title,
        slug: oldSlug,
        originalTitle: oldTitle,
        description,
        publishedAt,
        addedAt,
        file: fileId,
        documentCategory: categoryMap.get(category.slug),
      } as DocumentInput;

      const {documents: docsTmp} = await localhostClient.DocumentBySlug({
        slug: oldSlug,
      });
      const docLocal = docsTmp.data[0];
      if (docLocal) {
        try {
          await localhostClient.UpdateDocument({id: docLocal.id, data});
        } catch (e) {
          console.log(e.response.errors[0].message, e.request.variables);
        }
      }

      // Uncomment this to migrate documents (not disclosures)
      // try {
      //   await localhostClient.CreateDocument({data});
      // } catch (e) {
      //   console.log(e.response.errors[0].message, e.request.variables);
      // }
      // console.log(data);
      continue;
    }

    // Check if document have more metadata for some reason - none had more metadata
    if (metadata.length && metadata.length > 1) {
      console.log(doc.id, title, metadata.length);
    }

    // if (!metadata.length && category.slug !== 'ostatne') {
    //   console.log(doc.id, title, metadata.length);
    // }

    // I found several documents with useless Faktury metadata, probably added by mistake during migration from Strapi v3 to v4
    // These checks should determine if the metadata is needed or not and ignore it if not
    let meta = metadata[0];
    if (
      meta &&
      meta.__typename === 'ComponentMetadataFaktury' &&
      (!meta.name?.trim() || meta.name.trim() === title) &&
      (!meta.date || meta.date === date_added) &&
      meta.attachment.data?.id === fileId
    ) {
      // console.log(doc.id, title, 'useless Faktury metadata');
      meta = null;
    }

    if (category.slug === 'faktury') {
      const originalTitle = title;
      const {title: parsedTitle, datePart} = parseFakturyTitle(title);
      title = parsedTitle;
      description = null;

      // if (!title.match(/(Faktúry prijaté|Faktúry odoslané) \d{1,2}\/\d{4}/gi)) {
      //   console.log(doc.id, title);
      // }

      // checkForUniqueSlug(mySlugify(title), doc.id); // manually fixed by unpublishing or renaming duplicates
      // checkForUniqueFile(fileId, doc.id); // manually fixed by unpublishing or renaming duplicates

      const data = {
        type: Enum_Disclosure_Type.Faktury,
        title,
        slug: mySlugify(title),
        originalTitle,
        originalSlug: oldSlug,
        addedAt,
        file: fileId,
      } as DisclosureInput;

      // try {
      //   await localhostClient.CreateDisclosure({data});
      // } catch (e) {
      //   console.log(e.response.errors[0].message, e.request.variables);
      // }

      // console.log(data);
    }

    if (category.slug === 'objednavky') {
      if (!fileId) {
        continue;
      }
      // continue;
      // no mismatch in attachments, date or title found

      const originalTitle = title;
      title = parseObjednavkyTitle(title);
      // console.log(doc.id, title);
      description = null;

      // if (!isUniqueSlug(mySlugify(title), doc.id)) {
      //   const updatedTitle = `${oldTitle}a`;
      //   console.log(doc.id, title, updatedTitle);
      //   // const {updateBasicDocument} =
      //   //   await stagingClient.UpdateBasicDocumentTitle({
      //   //     title: updatedTitle,
      //   //     id: doc.id,
      //   //   });
      //   // console.log(doc.id, title, updateBasicDocument.data.attributes.title);
      // } // manually fixed by unpublishing or renaming duplicates
      // checkForUniqueFile(fileId, doc.id); // manually fixed by unpublishing or renaming duplicates

      const data = {
        type: Enum_Disclosure_Type.Objednavky,
        title,
        slug: mySlugify(title),
        originalTitle,
        originalSlug: oldSlug,
        addedAt,
        file: fileId,
      } as DisclosureInput;

      // try {
      //   await localhostClient.CreateDisclosure({data});
      // } catch (e) {
      //   console.log(e.response.errors[0].message, e.request.variables);
      // }

      // console.log(data);
    }

    if (category.slug === 'zmluvy') {
      // console.log(doc.id, title);
      if (meta && meta.__typename === 'ComponentMetadataZmluvy') {
        meta.amount = meta.amount.trim().replace(/,/g, '.').replace(/ /g, '');
        const amount = meta.amount !== '0' ? parseFloat(meta.amount) : null;
        description = meta.subject?.trim() || description || null;
        // if (!meta.subject?.trim() && description) {
        //   console.log(doc.id, title, description);
        // }
        const contractor = meta.supplier?.trim();
        const idNumber = meta.number?.trim();

        // isUniqueSlug(oldSlug, doc.id); // manually fixed by unpublishing or renaming duplicates
        // checkForUniqueFile(fileId, doc.id); // manually fixed by unpublishing or renaming duplicates

        const data = {
          type: Enum_Disclosure_Type.Zmluva,
          title,
          slug: oldSlug,
          description,
          addedAt,
          file: fileId,
          amount,
          contractor,
          idNumber,
        } as DisclosureInput;

        // try {
        //   await localhostClient.CreateDisclosure({data});
        // } catch (e) {
        //   console.log(e.response.errors[0].message, e.request.variables);
        // }
      }
    }

    if (category.slug === 'verejne-obstaravanie') {
      // if (meta && meta.__typename === 'ComponentMetadataVerejneObstaravanie') {
      //   console.log(doc.id, title); // none found, weird
      // }
      const data = {
        type: Enum_Disclosure_Type.VerejneObstaravanie,
        title,
        slug: oldSlug,
        originalSlug: oldSlug,
        description: description?.trim() || null,
        addedAt,
        file: fileId,
      } as DisclosureInput;

      // try {
      //   await localhostClient.CreateDisclosure({data});
      // } catch (e) {
      //   console.log(e.response.errors[0].message, e.request.variables);
      // }
    }

    if (category.slug === 'obchodna-verejna-sutaz') {
      // if (meta && meta.__typename === 'ComponentMetadataObchodnaVerejnaSutaz') {
      //   console.log(doc.id, title); // none found
      // }
      const data = {
        type: Enum_Disclosure_Type.ObchodnaVerejnaSutaz,
        title,
        slug: oldSlug,
        description: description?.trim() || null,
        addedAt,
        file: fileId,
      } as DisclosureInput;

      // console.log(data);

      // try {
      //   await localhostClient.CreateDisclosure({data});
      // } catch (e) {
      //   console.log(e.response.errors[0].message, e.request.variables);
      // }
    }

    if (category.slug === 'granty') {
      // console.log(doc.id, title);
      // if (meta && meta.__typename === 'ComponentMetadataMetadata') {
      //   console.log(doc.id, title); // none found
      // }
      const data = {
        type: Enum_Disclosure_Type.Grant,
        title,
        slug: mySlugify(title),
        originalSlug: oldSlug,
        description,
        addedAt,
        file: fileId,
      } as DisclosureInput;

      // console.log(data);

      try {
        await localhostClient.CreateDisclosure({data});
      } catch (e) {
        console.log(e.response.errors[0].message, e.request.variables);
      }
    }

    if (category.slug === 'ostatne') {
      // console.log(doc.id, title);
      // if (meta && meta.__typename === 'ComponentMetadataMetadata') {
      //   console.log(doc.id, title); // none found
      // }
      const data = {
        type: Enum_Disclosure_Type.Ostatne,
        title,
        slug: oldSlug,
        description: description?.trim() || null,
        addedAt,
        file: fileId,
      } as DisclosureInput;

      // console.log(data);

      // try {
      //   await localhostClient.CreateDisclosure({data});
      // } catch (e) {
      //   console.log(e.response.errors[0].message, e.request.variables);
      // }
    }
  }
}

// documentCategories();
// documents();

// async function removeDisclosuresWithoutFile() {
//   const {disclosures} = await localhostClient.AllDisclosures();
//   for (const disclosure of disclosures.data) {
//     if (!disclosure.attributes.file.data) {
//       console.log(disclosure.id, disclosure.attributes.slug);
//       await localhostClient.DeleteDisclosure({id: disclosure.id});
//     }
//   }
// }
//
// removeDisclosuresWithoutFile();

async function cleanupTitleSlug() {
  const {disclosures} = await localhostClient.AllDisclosures();

  for (const doc of disclosures.data) {
    // if (doc.attributes.title === doc.attributes.originalTitle?.trim()) {
    //   newTitle = null;
    // }
    // if (doc.attributes.slug === doc.attributes.originalSlug?.trim()) {
    //   newSlug = null;
    // }
    await localhostClient.UpdateDisclosure({
      id: doc.id,
      data: {
        originalTitle:
          doc.attributes.title === doc.attributes.originalTitle?.trim()
            ? null
            : doc.attributes.originalTitle,
        originalSlug:
          doc.attributes.slug === doc.attributes.originalSlug?.trim()
            ? null
            : doc.attributes.originalSlug,
      } as DocumentInput,
    });
  }
}

cleanupTitleSlug();
