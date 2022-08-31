# Custom Strapi manipulation using GraphQL

## What is this ?

A set of scripts that help you move data between two or more graphql endpoints - probably different Strapi instances, but not necessarily. Feel free to use for feeding seed data, rest endpoints or whatever.

You should be able to prep your queries by browsing the graphql schema using [GraphiQL explorer](https://github.com/bratislava/graphiql-explorer-example).

To get an idea how to modify Strapi items, take a look at the library migration in `src/city-library-v4-migration/migration`

## Setup

We're trying out [bun](https://bun.sh/) and [gts](https://github.com/google/gts) setup in this project.

**Bun does not work too well yet :-/ That is - it works for compiling & running tsc-watch fine but you have to run the resulting js script with `node`**

### Install

```
bun install
```

Add / remove dependencies

```
bun add package-name
bun remove package-name
```

### Run

~Run ts files directly using bun~ The following does not work yet:

```
bun run src/index.ts
```

Or using good-old node - compile / watch using `tsc`:

```
# watch will recompile each time you change the file as long as you kep it running
bun run watch
# compile builds once
bun run compile
```

And run the resulting js file:

```
node ./build/src/index.js
```

## Structure / adding new projects

Each direct subdirectory of `graphql` should host graphql/codegen files related to a single graphql endpoint.

All SDKs are exported from `utils/gql` - feel free to add to this file or to rename the `source/target` client when working with other projects.

## Library v3->v4 setup

We take data from prod v3 server running at `https://strapi-city-library.bratislava.sk/graphql`

The strapi instance we're modifying is assumed to be running locally at `localhost:1337` - change this if making changes directly on staging/prod.

**You need to have permissions for public role in target Strapi to modify the data you are modifying. If you do not wish to do this (i.e. running on production), you need to authenticate as an admin (this is not implemented but shouldn' be too hard).**
