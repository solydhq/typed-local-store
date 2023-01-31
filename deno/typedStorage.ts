import { RetrievalMode, ITypedStorage, TypedStorageOptions } from './types.ts';

export default class TypedStorage<T> implements ITypedStorage<T> {
  private readonly storage: Storage;

  constructor({
    storage = 'localStorage',
    ignoreMissingStorage = false,
    fallbackStorage = undefined,
  }: TypedStorageOptions = {}) {
    const browserStorage = typeof window !== 'undefined' && window?.[storage];
    this.storage = browserStorage || global[storage] || fallbackStorage;

    if (!this.storage && !ignoreMissingStorage) {
      throw Error('Web Storage API not found.');
    }
  }

  public get length(): number {
    return this.storage?.length;
  }

  public key<U extends keyof T>(index: number): U {
    return this.storage?.key(index) as U;
  }

  public getItem<U extends keyof T>(key: U, retrievalMode: RetrievalMode = 'fail'): T[U] | null {
    const item = this.storage?.getItem(key.toString());

    if (item == null) {
      return item;
    }

    try {
      return JSON.parse(item) as T[U];
    } catch (error) {
      switch (retrievalMode) {
        case 'safe':
          return null;
        case 'raw':
          return (item as unknown) as T[U];
        default:
          throw error;
      }
    }
  }

  public setItem<U extends keyof T>(key: U, value: T[U]): void {
    this.storage?.setItem(key.toString(), JSON.stringify(value));
  }

  public removeItem<U extends keyof T>(key: U): void {
    this.storage?.removeItem(key.toString());
  }

  public clear(): void {
    this.storage?.clear();
  }
}
