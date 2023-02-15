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

export function parseFakturyTitle(tmpTitle: string) {
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

export function parseObjednavkyTitle(tmpTitle: string) {
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

  return tmpTitle;
}

const uniqueSlugs = new Set<string>();
const nonUniqueSlugs = new Set<{slug: string; id: string}>();

export function isUniqueSlug(slug: string, id: string) {
  if (uniqueSlugs.has(slug)) {
    console.log('duplicate slug', slug, id);
    nonUniqueSlugs.add({slug, id});
    return false;
  }
  uniqueSlugs.add(slug);
  return true;
}

const uniqueFiles = new Set<string>();
const uniqueFileDocuments = new Map<string, string>();
const nonUniqueFiles = new Set<{fileId: string; id: string}>();

export function checkForUniqueFile(fileId: string, id: string) {
  if (uniqueFiles.has(fileId)) {
    console.log(
      'Duplicate File',
      fileId,
      ' | ',
      uniqueFileDocuments.get(fileId),
      ' | ',
      id
    );
    nonUniqueFiles.add({fileId, id});
  } else {
    uniqueFiles.add(fileId);
    uniqueFileDocuments.set(fileId, id);
  }
}

// Check if there are any duplicate attachments for Faktury - none found
// const fakturyAttachments = basicDocuments.data
//   .filter(
//     doc => doc.attributes.file_category.data.attributes.slug === 'faktury'
//   )
//   .map(doc => doc.attributes.attachment.data?.id)
//   .filter(Boolean);
// const fakturyAttachmentsSet = new Set(fakturyAttachments);
// console.log(fakturyAttachmentsSet.size, fakturyAttachments.length);

// Then check for other incorrect metadata - none found
// if (
//   meta &&
//   ((category.slug === 'faktury' &&
//       meta.__typename !== 'ComponentMetadataFaktury') ||
//     (category.slug === 'zmluvy' &&
//       meta.__typename !== 'ComponentMetadataZmluvy') ||
//     (category.slug === 'objednavky' &&
//       meta.__typename !== 'ComponentMetadataObjednavky') ||
//     (category.slug === 'verejne-obstaravanie' &&
//       meta.__typename !== 'ComponentMetadataVerejneObstaravanie') ||
//     (category.slug === 'obchodna-verejna-sutaz' &&
//       meta.__typename !== 'ComponentMetadataObchodnaVerejnaSutaz') ||
//     (category.slug === 'granty' &&
//       meta.__typename !== 'ComponentMetadataMetadata'))
// ) {
//   console.log(doc.id, title, 'wrong metadata');
// }

// FAKTURY

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

// ZMLUVY
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
