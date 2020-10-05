import  TypedStorage from '../src/index';

const typedStorage = new TypedStorage<{}>();

describe('TypedLocalStorage', () => {
  it('should expose a length method', () => {
    expect(typedStorage.length).toBeInstanceOf(Function);
  });

  it('should expose a key method', () => {
    expect(typedStorage.key).toBeInstanceOf(Function);
  });

  it('should expose a getItem method', () => {
      expect(typedStorage.getItem).toBeInstanceOf(Function);
  });

  it('should expose a setItem method', () => {
    expect(typedStorage.setItem).toBeInstanceOf(Function);
  });

  it('should expose a removeItem method', () => {
    expect(typedStorage.removeItem).toBeInstanceOf(Function);
  });

  it('should expose a clear method', () => {
    expect(typedStorage.clear).toBeInstanceOf(Function);
  });
});
