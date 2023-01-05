import { localhostClient, stagingClient } from "./gql";

// async function localities() {
//   for (const locale of ['sk', 'en']) {
//     const allPlaces = await localhostClient.AllPlaces({locale});
//
//     for (const place of allPlaces.places.data) {
//       await localhostClient.CreateBranch({
//         data: {
//           title: place.attributes.title,
//           slug: place.attributes.slug,
//           phone: place.attributes.phone,
//           email: place.attributes.email,
//           openingHours: place.attributes.openingHours,
//         },
//       });
//     }
//   }
// }

async function events() {
  for (const locale of ['sk']) {
    const allBranches = await localhostClient.AllBranches({locale});
    const branchMap = new Map<string, string>();
    allBranches.branches.data.forEach(branch => {
      branchMap.set(branch.attributes.title, branch.id);
    });

    const allEventsResponse = await stagingClient.AllEvents({locale});
    const allEvents = allEventsResponse.events.data;

    for (const event of allEvents) {
      const oldPlaceTitle =
        event.attributes.eventLocality.data.attributes.title;

      const branchId = branchMap.get(oldPlaceTitle);

      const {updateEvent} = await localhostClient.UpdateEventPlace({
        locale,
        id: event.id,
        branchId,
      });

      const newPlaceTitle =
        updateEvent.data.attributes.branch.data.attributes.title;

      console.log(
        oldPlaceTitle === newPlaceTitle,
        event.id,
        oldPlaceTitle,
        '-->',
        newPlaceTitle
      );
    }
  }
}

async function branchMedias() {
  for (const locale of ['sk']) {
    const localityPagesRes = await stagingClient.LocalityPages({locale});

    const allBranches = await localhostClient.AllBranches({locale});

    for (const page of localityPagesRes.pages.data) {
      const gallerySection = page.attributes.sections.find(
        section => section.__typename === 'ComponentSectionsGallery'
      );

      const shortenedSlug = page.attributes.slug.split('/').slice(-1)[0];
      const branchToUpdate = allBranches.branches.data.find(
        branch => branch.attributes.slug === shortenedSlug
      );

      // appease TS gods
      if (gallerySection.__typename === 'ComponentSectionsGallery') {
        const imageIds =
          gallerySection.Gallery.map(photo => photo.Photo.data.id) || [];

        const {updateBranch} = await localhostClient.UpdateBranchMedias({
          id: branchToUpdate.id,
          locale,
          mediaIds: imageIds,
        });

        // Update media captions - forbidden access
        // const images =
        //   gallerySection.Gallery.map(photo => ({
        //     id: photo.Photo.data.id,
        //     caption: photo.Description,
        //   })) || [];
        // for (const media of images) {
        //   if (media.id === '1998') {
        //     const {updateUploadFile} =
        //       await localhostClient.UpdateMediaCaptionAndAlt({
        //         id: media.id,
        //         caption: media.caption,
        //       });
        //     console.log('media', updateUploadFile);
        //   }
        // }

        console.log(
          shortenedSlug,
          branchToUpdate,
          updateBranch.data.attributes
        );
      }
    }
  }
}

branchMedias();
