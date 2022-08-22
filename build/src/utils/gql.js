"use strict";
exports.__esModule = true;
exports.targetClient = exports.sourceClient = void 0;
var index_1 = require("../graphql/city-library-v3/index");
var index_2 = require("../graphql/city-library-v4/index");
var graphql_request_1 = require("graphql-request");
// we export all the clients - if you're writing new integrations feel free to add them, and add their respective graphql setup into /graphql/instance-name
// note - even when working with the same Strapi instance as before, you may need to regenerate the gql types, as they may no longer be valid
// the target client is usually on localhost with rights set up so that a public user can write to it freely - if using this t owritte directly o deployment, accesses need to be sorted out
var v3LibraryClient = new graphql_request_1.GraphQLClient('https://strapi-city-library.bratislava.sk/graphql');
var v4LibraryClient = new graphql_request_1.GraphQLClient('localhost:1337/graphql');
exports.sourceClient = (0, index_1.getSdk)(v3LibraryClient);
exports.targetClient = (0, index_2.getSdk)(v4LibraryClient);
