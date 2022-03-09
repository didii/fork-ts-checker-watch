# fork-ts-checker-watch

Mini-repo to showcase a possible bug in [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin).

Steps to reproduce:

1. `npm i`
2. `npm run start`
3. Change anything in the following files
   * `./src/package-a/index.ts`
   * `./src/package-a/options-for-a.ts`
