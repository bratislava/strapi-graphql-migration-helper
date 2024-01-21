import { getSdk as localhostGetSdk } from '../graphql/bratislava-localhost'
import { getSdk as stagingGetSdk } from '../graphql/bratislava-staging'
import { GraphQLClient } from 'graphql-request'

// we export all the clients - if you're writing new integrations feel free to add them, and add their respective graphql setup into /graphql/instance-name
// note - even when working with the same Strapi instance as before, you may need to regenerate the gql types, as they may no longer be valid

// the target client is usually on localhost with rights set up so that a public user can write to it freely - if using this t owritte directly o deployment, accesses need to be sorted out

const URL_LOCALHOST = 'http://localhost:1337/graphql'
const URL_EIS40 = 'http://192.168.1.16:1337/graphql'
const URL_OFIS1 = 'http://172.25.37.23:1337/graphql'
const URL_OFIS2 = 'http://172.25.37.48:1337/graphql'
const URL_OFIS3 = 'http://172.20.144.1:1337/graphql'
const localhostBratislavaClient = new GraphQLClient(URL_EIS40)

// We are connecting to dev, because staging is more used for testing purposes and the database is changed more often
const productionBratislavaClient = new GraphQLClient('https://bratislava-strapi.bratislava.sk/graphql')
const stagingBratislavaClient = new GraphQLClient('https://bratislava-strapi.staging.bratislava.sk/graphql')

export const localhostClient = localhostGetSdk(localhostBratislavaClient)
export const stagingClient = stagingGetSdk(stagingBratislavaClient)
export const productionClient = stagingGetSdk(productionBratislavaClient)
