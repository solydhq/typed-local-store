# typed-local-storage [![Tests Actions Status](https://github.com/gcascio/typed-local-store/workflows/Tests/badge.svg)](https://github.com/gcascio/typed-local-store/actions)

A zero-dependency wrapper to provide type safe access to the localStorage and sessionStorage.

## :floppy_disk: Installation

```bash
npm install typed-local-store
# or
yarn add typed-local-store
```

## :technologist: Usage

Create a schema of your desired storage structure:

```typescript
interface Schema {
  counter: number;
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  };
  posts: string[];
}
```

Then create your storage using the defined schema:

```typescript
import TypedLocalStore from 'typed-local-store';

const typedStorage = new TypedLocalStore<Schema>();
```

## :monocle_face: API

The API of typed-local-store mimics the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API). This allows for a easy transition from using `localStorage` directly to using `TypedLocalStore`. |

### Options

The constructor can receive a options object to configure the store.

| Property                      | Required | Default        | Description                                                                             |
| ----------------------------- | -------- | -------------- | --------------------------------------------------------------------------------------- |
| storage: string               | false    | "localStorage" | Choose the storage type, "localStorage" or "sessionStorage"                             |
| fallbackStorage: Storage      | false    | undefined      | Provide a fallback storage in case localStorage and or SessionStorage are not available |
| ignoreMissingStorage: boolean | false    | false          | Prevent error to be thrown when no storage is present.                                  |

### getItem

The `getItem` method has three retrieval modes, whereas `'fail'` is the default mode

| Mode | Description                                                                                      |
| ---- | ------------------------------------------------------------------------------------------------ |
| fail | If a something to be restored from the store can not be parsed by `JSON.parse` a error is thrown |
| raw  | If parsing of the retrieval value fails, the unparsed value is returned                          |
| safe | If parsing of the retrieval value fails, `null` is returned                                      |

### MemoryStorage

Sometimes it is desireable to not rely on the browser API ( e.g. in case of SSR). This package ships a in-memory replacement for the Web Storage API which can be used in places where the browser API is not present. It can be used alone or passed to the TypedLocalStore via the `fallbackStorage` option:

```typescript
import TypedLocalStore, { MemoryStorage } from 'typed-local-store';

const memoryStorage = new MemoryStorage();
const typedStorage = new TypedLocalStore<Schema>({
  fallbackStorage: memoryStorage,
});
```

## :hammer_and_wrench: Contributing

Interested in contributing? Great!

To fix a bug or add a feature, follow these steps:

- Create a [Fork](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#forking-a-repository) of the repo
- Create a new branch (`git checkout -b your-branch`)
- Add your changes and new tests if necessary
- Make sure all tests pass
- Commit your changes (`git commit -am 'feat: fantastic feature'`)
- Push the branch (`git push origin your-branch`)
- Create a [Pull Request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#forking-a-repository)

### Development

The required packages to start development can be installed with

```bash
npm install
# or
yarn install
```

The tests can be run with

```bash
npm run test
# or
yarn test
```
