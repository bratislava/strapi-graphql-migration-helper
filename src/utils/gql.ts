import {getSdk as v3LibrarySdk} from '../graphql/city-library-v3/index';
import {getSdk as v4LibrarySdk} from '../graphql/city-library-v4/index';
import {GraphQLClient} from 'graphql-request';

// we export all the clients - if you're writing new integrations feel free to add them, and add their respective graphql setup into /graphql/instance-name
// note - even when working with the same Strapi instance as before, you may need to regenerate the gql types, as they may no longer be valid

// the target client is usually on localhost with rights set up so that a public user can write to it freely - if using this t owritte directly o deployment, accesses need to be sorted out

const v3LibraryClient = new GraphQLClient(
  'https://strapi-city-library.bratislava.sk/graphql'
);
const v4LibraryClient = new GraphQLClient('localhost:1337/graphql');

export const sourceClient = v3LibrarySdk(v3LibraryClient);

export const targetClient = v4LibrarySdk(v4LibraryClient);
