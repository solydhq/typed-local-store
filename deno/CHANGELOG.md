# Changelog

## [v2.0.0](https://github.com/lynoapp/typed-local-store/tree/v2.0.0) (2022-09-05)

[Full Changelog](https://github.com/lynoapp/typed-local-store/compare/v1.1.2...v2.0.0)

### :boom: Breaking

- change `length` method to getter to fully satisfy the Web Storage API

### :rocket: Features

- add `fallbackStorage` to provide an alternative storage incase `localStorage` and/or `sessionStorage` is not present
- add `ignoreMissingStorage` option to prevent error to pe thrown incase no storage is present

## [v1.1.2](https://github.com/lynoapp/typed-local-store/tree/v1.1.2) (2022-08-01)

[Full Changelog](https://github.com/lynoapp/typed-local-store/compare/v1.1.1...v1.1.2)

### :bug: Bug Fixes

- assure the presence of the Web Storage API when initializing the store

## [v1.1.1](https://github.com/lynoapp/typed-local-store/tree/v1.1.1) (2021-03-03)

[Full Changelog](https://github.com/lynoapp/typed-local-store/compare/v1.1.0...v1.1.1)

### :bug: Bug Fixes

- fix interface definition

## [v1.1.0](https://github.com/lynoapp/typed-local-store/tree/v1.1.0) (2021-03-03)

[Full Changelog](https://github.com/lynoapp/typed-local-store/compare/v1.0.4...v1.1.0)

### :rocket: Features

- adds retrieval options to `getItem`
- adds deno support
