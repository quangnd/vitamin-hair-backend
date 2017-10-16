# Backend project

This is a very basic repository using HapiJS for serving API.

## Install

- Install packages: `npm install`
- Run: `npm run dev`
- Build: `npm run build`
- To setup mysql database, rename *.env_example* to *.env* and change the values.

## Todo

- [ ] Add production build.
- [x] Install `editorconfig` extension for visual studio code.
- [x] Add .env package.
- [x] Add eslint.
- [x] Add babel-watch.
- [x] Add knex.
- [x] Add node security.

## Knex command

- *Create tables* `knex migrate:latest`
- *Drop all tables* `knex migrate:rollback`
- *Run seed* `knex seed:run`

## Note

- `babel-watch` could be crash when it was occurred `Error: Cannot find module './chalkConfig'`. You should kill the current command with `Ctrt+C` and re-run `npm run dev`.

