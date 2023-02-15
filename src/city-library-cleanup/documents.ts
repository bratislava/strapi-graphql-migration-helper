import {localhostClient, stagingClient} from './gql';
import {
  DisclosureInput,
  DocumentInput,
  Enum_Disclosure_Type,
} from '../graphql/city-library-localhost';
import slugify = require('@sindresorhus/slugify');

export function mySlugify(string: string) {
  return slugify(string, {
    customReplacements: [
      ['ä', 'a'],
      ['ö', 'o'],
      ['ü', 'u'],
    ],
  });
}

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

function parseFakturyTitle(tmpTitle: string) {
  tmpTitle = tmpTitle
    .replace(/\s\s+/g, ' ')
    .replace(/(faktúra|faktúry|faktura|faktury|fa)/i, 'faktúry')
    .replace(/(prijaté|prijate)/i, 'prijaté')
    .replace(/(prijaté faktúry|faktúry prijaté)/i, 'Faktúry prijaté')
    .replace(/(odoslané|odoslane)/i, 'odoslané')
    .replace(/(odoslané faktúry|faktúry odoslané)/i, 'Faktúry odoslané')
    .replace(/(faktúry)/i, 'Faktúry');
  let datePart =
    tmpTitle.startsWith('Faktúry prijaté') ||
    tmpTitle.startsWith('Faktúry odoslané')
      ? tmpTitle.split(' ').slice(2).join(' ')
      : tmpTitle.split(' ').slice(1).join(' ');
  const titlePart =
    tmpTitle.startsWith('Faktúry prijaté') ||
    tmpTitle.startsWith('Faktúry odoslané')
      ? tmpTitle.split(' ').slice(0, 2).join(' ')
      : tmpTitle.split(' ').slice(0, 1).join(' ');
  datePart = datePart
    .replace(/(_)/gi, '.')
    .replace(/(január|januar|jan)/gi, '1/')
    // .replace(/^(^1\/|za 1\/)/gi, 'január ')
    .replace(/(február|februar|feb)/gi, '2/')
    // .replace(/^(^2\/|za 2\/)/gi, 'február ')
    .replace(/(marec|mar)/gi, '3/')
    // .replace(/^(3\/|za 3\/)/gi, 'marec ')
    .replace(/(apríl|april|apr)/gi, '4/')
    // .replace(/^(4\/|za 4\/)/gi, 'apríl ')
    .replace(/(máj|maj)/gi, '5/')
    // .replace(/^(5\/|za 5\/)/gi, 'máj ')
    .replace(/(jún|jun)/gi, '6/')
    // .replace(/^(6\/|za 6\/)/gi, 'jún ')
    .replace(/(júl|jul)/gi, '7/')
    // .replace(/^(7\/|za 7\/)/gi, 'júl ')
    .replace(/(august|aug)/gi, '8/')
    // .replace(/^(8\/|za 8\/)/gi, 'august ')
    .replace(/(september|sep)/gi, '9/')
    // .replace(/^(9\/|za 9\/)/gi, 'september ')
    .replace(/(október|oktober|okt)/gi, '10/')
    // .replace(/^(10\/|za 10\/)/gi, 'október ')
    .replace(/(november|nov)/gi, '11/')
    // .replace(/^(11\/|za 11\/)/gi, 'november ')
    .replace(/(december|dec)/gi, '12/')
    // .replace(/^(12\/|za 12\/)/gi, 'december ')
    .replace(/\/ /gi, '/')
    .replace(/\./gi, ' ')
    .replace(/\s\s+/gi, ' ');

  if (datePart.match(/^\d/g)) {
    datePart = datePart.split(' ').join('. ');
    // } else {
    //   datePart = '- ' + datePart;
  }
  return {title: `${titlePart} ${datePart}`, datePart: datePart};
}

function parseObjednavkyTitle(tmpTitle: string) {
  tmpTitle = tmpTitle
    .replace(
      /(objednavky|objednávky|objednávka|objednavka|objed\.|objed|objd\.|objd|obj\.|obj)/i,
      'Objednávky '
    )
    .replace(/\s\s+/g, ' ')
    .replace(/(január|januar|jan) /gi, '1/')
    .replace(/(február|februar|feb)/gi, '2/')
    .replace(/(marec|mar)/gi, '3/')
    .replace(/(apríl|april|apr)/gi, '4/')
    .replace(/(máj|maj)/gi, '5/')
    .replace(/(jún|jun)/gi, '6/')
    .replace(/(júl|jul)/gi, '7/')
    .replace(/(august|aug)/gi, '8/')
    .replace(/(september|sep)/gi, '9/')
    .replace(/(október|oktober|okt)/gi, '10/')
    .replace(/(november|nov)/gi, '11/')
    .replace(/(december|dec)/gi, '12/')
    .replace(/(\/ )/gi, '/');
  // .replace(/(prijaté|prijate)/i, 'prijaté')
  // .replace(/(prijaté faktúry|faktúry prijaté)/i, 'Faktúry prijaté')
  // .replace(/(odoslané|odoslane)/i, 'odoslané')
  // .replace(/(odoslané faktúry|faktúry odoslané)/i, 'Faktúry odoslané')
  // .replace(/(faktúry)/i, 'Faktúry');

  return tmpTitle;
}

async function documents() {
  const {documentCategories} = await localhostClient.AllDocumentCategories();
  const categoryMap = new Map<string, string>();
  documentCategories.data.forEach(cat => {
    categoryMap.set(cat.attributes.slug, cat.id);
  });

  const {basicDocuments} = await stagingClient.AllBasicDocuments({
    categorySlugs: ['objednavky'],
  });

  console.log('Fetched docmuents count:', basicDocuments.data.length);
  // Check if there are any duplicate attachments for Faktury - none found
  // const fakturyAttachments = basicDocuments.data
  //   .filter(
  //     doc => doc.attributes.file_category.data.attributes.slug === 'faktury'
  //   )
  //   .map(doc => doc.attributes.attachment.data?.id)
  //   .filter(Boolean);
  // const fakturyAttachmentsSet = new Set(fakturyAttachments);
  // console.log(fakturyAttachmentsSet.size, fakturyAttachments.length);

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

      const data = {
        title,
        slug: mySlugify(title),
        originalTitle: oldTitle,
        originalSlug: oldSlug,
        description,
        publishedAt,
        addedAt,
        file: fileId,
        documentCategory: categoryMap.get(category.slug),
      } as DocumentInput;
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

    // Then check for other incorrect metadata - none found
    if (
      meta &&
      ((category.slug === 'faktury' &&
        meta.__typename !== 'ComponentMetadataFaktury') ||
        (category.slug === 'zmluvy' &&
          meta.__typename !== 'ComponentMetadataZmluvy') ||
        (category.slug === 'objednavky' &&
          meta.__typename !== 'ComponentMetadataObjednavky') ||
        (category.slug === 'verejne-obstaravanie' &&
          meta.__typename !== 'ComponentMetadataVerejneObstaravanie') ||
        (category.slug === 'obchodna-verejna-sutaz' &&
          meta.__typename !== 'ComponentMetadataObchodnaVerejnaSutaz') ||
        (category.slug === 'granty' &&
          meta.__typename !== 'ComponentMetadataMetadata'))
    ) {
      console.log(doc.id, title, 'wrong metadata');
    }

    if (category.slug === 'faktury') {
      continue;
      // if (!meta) {
      //   // console.log(doc.id, title, 'no metadata');
      // } else if (meta.__typename === 'ComponentMetadataFaktury') {
      //   // if (meta.attachment.data?.id !== fileId) {
      //   //   console.log(doc.id, title, 'different attachment'); // none found
      //   }
      //   // if (meta.name?.trim() !== title) {
      //   //   console.log(doc.id, title, meta.name?.trim()); // ignore, just diacritics
      //   // }
      //   // if (meta.date !== date_added) {
      //   //   console.log(doc.id, title, '|', meta.date, date_added); // ignore, use date_added
      //   // }
      // }
      // if (titlePart === 'Faktúry') {
      //   console.log(doc.id, [titlePart, datePart].join(' '));
      // }

      const originalTitle = title;
      const {title: parsedTitle, datePart} = parseFakturyTitle(title);
      title = parsedTitle;
      const period = datePart;
      description = null;

      // if (!title.match(/(Faktúry prijaté|Faktúry odoslané) \d{1,2}\/\d{4}/gi)) {
      //   console.log(doc.id, title);
      // }

      const data = {
        title,
        slug: mySlugify(title),
        originalTitle,
        originalSlug: oldSlug,
        description,
        publishedAt,
        addedAt,
        file: fileId,
        period,
      } as DisclosureInput;
      // console.log(doc.id, [titlePart, datePart].join(' '));
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

      console.log(data.slug);
    }

    if (category.slug === 'zmluvy') {
      // console.log(doc.id, title);
      if (meta && meta.__typename === 'ComponentMetadataZmluvy') {
        meta.amount = meta.amount.trim().replace(/,/g, '.').replace(/ /g, '');
        const amount = meta.amount !== '0' ? parseFloat(meta.amount) : null;
        description = meta.subject?.trim() || description;
        if (!meta.subject?.trim() && description) {
          console.log(doc.id, title, description);
        }
        // if (meta.date !== date_added) {
        //   console.log(doc.id, title, '|', meta.date, date_added); // ignore, use date_added
        // }
        // if (meta.type) {
        //   console.log(doc.id, title, meta.type); // none found
        // }
        // if (!meta.supplier) {
        //   console.log(doc.id, 'no supplier', title); // few, need to fix
        // }
        // if (!meta.subject) {
        //   console.log(doc.id, 'no subject', title); // a lot
        // }
        // if (!meta.number) {
        //   console.log(doc.id, 'no id number', title); // a bunch, need to fix
        // }
        // if (!meta.amount) {
        //   console.log(doc.id, 'no amount', title); // 1, fixed
        // }
        // if (!amount) {
        //   console.log(doc.id, amount, title); // a lot
        // }
        const data = {
          title,
          slug: mySlugify(title),
          originalSlug: oldSlug,
          description,
          publishedAt,
          addedAt,
          file: fileId,
          amount,
        } as DisclosureInput;
      }
    }

    if (category.slug === 'verejne-obstaravanie') {
      // if (meta && meta.__typename === 'ComponentMetadataVerejneObstaravanie') {
      //   console.log(doc.id, title); // none found, weird
      // }
      const data = {
        title,
        slug: mySlugify(title),
        originalSlug: oldSlug,
        description,
        publishedAt,
        addedAt,
        file: fileId,
      } as DisclosureInput;
    }

    if (category.slug === 'obchodna-verejna-sutaz') {
      // if (meta && meta.__typename === 'ComponentMetadataObchodnaVerejnaSutaz') {
      //   console.log(doc.id, title); // none found
      // }
      const data = {
        title,
        slug: mySlugify(title),
        originalSlug: oldSlug,
        description,
        publishedAt,
        addedAt,
        file: fileId,
      } as DisclosureInput;
    }
    if (category.slug === 'granty') {
      // console.log(doc.id, title);
      if (meta && meta.__typename === 'ComponentMetadataMetadata') {
        console.log(doc.id, title); // none found
      }
      const data = {
        title,
        slug: mySlugify(title),
        originalSlug: oldSlug,
        description,
        publishedAt,
        addedAt,
        file: fileId,
      } as DisclosureInput;
    }
  }
}

// documentCategories();
// documents();

function tmp() {
  console.log(slugify('a'));
  console.log(slugify('a'));
}

tmp();
