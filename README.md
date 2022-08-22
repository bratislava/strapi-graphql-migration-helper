# Custom Strapi manipulation using GraphQL

We're trying out [bun](https://bun.sh/) and [gts](https://github.com/google/gts) setup in this project.

## Install

```
bun install
```

Add / remove dependencies

```
bun add package-name
bun remove package-name
```

## Run

Either run index.ts form your editor with [Quokka.js](https://quokkajs.com/).

Or run ts files directly using bun:

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

### Library v3->v4 setup

We run against prod v3 server running at `https://strapi-city-library.staging.bratislava.sk/graphql`

The strapi instance we're modifying is assumed to be running locally at `localhost:1337` - change this if making changes directly on staging/prod
