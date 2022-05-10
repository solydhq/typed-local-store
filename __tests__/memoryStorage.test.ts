import  { MemoryStorage } from '../src/index';

const memoryStorage = new MemoryStorage();

describe('TypedStorage', () => {
  afterEach(() => memoryStorage.clear())

  it('should set and retrieve correct value', () => {
    const data = ['test-key', 'test-value'];
    memoryStorage.setItem(data[0], data[1])

    const value = memoryStorage.getItem(data[0]);

    expect(value).toEqual(data[1]);
  });

  it('should retrieve correct keys', () => {
    const keys = ['key-1', 'key-2'];
    memoryStorage.setItem(keys[0], '')
    memoryStorage.setItem(keys[1], '')

    const key0 = memoryStorage.key(0)
    const key1 = memoryStorage.key(1)

    expect(key0).toEqual(keys[0]);
    expect(key1).toEqual(keys[1]);
  });

  it('should retrieve correct length', () => {
    const keys = ['key-1', 'key-2'];
    memoryStorage.setItem(keys[0], 'a')
    memoryStorage.setItem(keys[1], 'b')

    const length = memoryStorage.length

    expect(length).toEqual(keys.length);
  });

  it('should remove value', () => {
    const data = ['test-key', 'test-value'];
    memoryStorage.setItem(data[0], data[1])

    const value = memoryStorage.getItem(data[0]);
    memoryStorage.removeItem(data[0])

    const valueAfterRemove = memoryStorage.getItem(data[0]);

    expect(value).toEqual(data[1]);
    expect(valueAfterRemove).toBeFalsy();
  });

  it('should remove value', () => {
    const data = ['test-key', 'test-value'];
    memoryStorage.setItem(data[0], data[1])

    memoryStorage.clear()

    const value = memoryStorage.getItem(data[0]);
    const length = memoryStorage.length;

    expect(value).toBeFalsy();
    expect(length).toEqual(0);
  });
});
