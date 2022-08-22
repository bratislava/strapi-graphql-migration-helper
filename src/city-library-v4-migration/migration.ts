import {sourceClient, targetClient} from '../utils/gql';

// - fixes issues after library v3 -> v4 migration
// - moves events out of pages model into their own

const events = async () => {
  console.log(await sourceClient.Test());
};

events();
