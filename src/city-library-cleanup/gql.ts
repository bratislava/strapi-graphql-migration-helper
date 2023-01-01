import {getSdk as localhostGetSdk} from '../graphql/city-library-localhost';
import {getSdk as stagingGetSdk} from '../graphql/city-library-staging';
import {GraphQLClient} from 'graphql-request';

// we export all the clients - if you're writing new integrations feel free to add them, and add their respective graphql setup into /graphql/instance-name
// note - even when working with the same Strapi instance as before, you may need to regenerate the gql types, as they may no longer be valid

// the target client is usually on localhost with rights set up so that a public user can write to it freely - if using this t owritte directly o deployment, accesses need to be sorted out

const localhostCityLibraryClient = new GraphQLClient(
  'http://localhost:1338/graphql'
);

// We are connecting to dev, because staging is more used for testitng purposes and the database is changed more often
const stagingCityLibraryClient = new GraphQLClient(
  'https://city-library-strapi.dev.bratislava.sk/graphql'
);

export const localhostClient = localhostGetSdk(localhostCityLibraryClient);
export const stagingClient = stagingGetSdk(stagingCityLibraryClient);
