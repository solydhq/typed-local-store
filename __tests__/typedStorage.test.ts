import  TypedStorage, { MemoryStorage } from '../src/index';

/**
 * Initialize test data
 */

interface Schema {
  'stringValue': string;
  'numberValue': number;
  'booleanValue': boolean;
  'stringArrayValue': string[];
  'numberArrayValue': number[];
  'booleanArrayValue': boolean[];
  'emptyObjectValue': {},
  'objectValue': Omit<Schema, 'objectValue'>
}

const testObject: Schema = {
  stringValue: 'value',
  numberValue: 1,
  booleanValue: true,
  stringArrayValue: ['A', 'B', 'C'],
  numberArrayValue: [0, 1, 2],
  booleanArrayValue: [true, false, true],
  emptyObjectValue: {},
  objectValue: {
    stringValue: 'innerValue',
    numberValue: 2,
    booleanValue: false,
    stringArrayValue: ['D', 'E', 'F'],
    numberArrayValue: [3, 4, 5],
    booleanArrayValue: [false, true, false],
    emptyObjectValue: {},
  },
}

const typedStorage = new TypedStorage<Schema>();

/**
 * Tests
 */

describe('TypedStorage set some values and get keys', () => {
  it('should retrieve correct keys', () => {
    typedStorage.setItem('stringValue', testObject.stringValue)
    typedStorage.setItem('objectValue', testObject.objectValue)

    const stringValue = typedStorage.getItem(typedStorage.key(0));
    const objectValue = typedStorage.getItem(typedStorage.key(1));

    expect(stringValue).toEqual(testObject.stringValue);
    expect(objectValue).toEqual(testObject.objectValue);
  });

  typedStorage.clear();
});

describe('TypedStorage set, get and remove string value', () => {
  it('should retrieve correct stringValue', () => {
    typedStorage.setItem('stringValue', testObject.stringValue)

    const stringValue = typedStorage.getItem('stringValue');

    expect(typeof stringValue).toBe('string');
    expect(stringValue).toEqual(testObject.stringValue);
  });

  it('should remove stringValue', () => {
    typedStorage.removeItem('stringValue');

    expect(typedStorage.getItem('stringValue')).toEqual(null);
  });
});

describe('TypedStorage set, get and remove number value', () => {
  it('should retrieve correct numberValue', () => {
    typedStorage.setItem('numberValue', testObject.numberValue)

    const numberValue = typedStorage.getItem('numberValue');

    expect(typeof numberValue).toBe('number');
    expect(numberValue).toEqual(testObject.numberValue);
  });

  it('should remove numberValue', () => {
    typedStorage.removeItem('numberValue');

    expect(typedStorage.getItem('numberValue')).toEqual(null);
  });
});

describe('TypedStorage set, get and remove boolean value', () => {
  it('should retrieve correct booleanValue', () => {
    typedStorage.setItem('booleanValue', testObject.booleanValue)

    const booleanValue = typedStorage.getItem('booleanValue');

    expect(typeof booleanValue).toBe('boolean');
    expect(booleanValue).toEqual(testObject.booleanValue);
  });

  it('should remove booleanValue', () => {
    typedStorage.removeItem('booleanValue');

    expect(typedStorage.getItem('booleanValue')).toEqual(null);
  });
});

describe('TypedStorage set, get and remove string array value', () => {
  it('should retrieve correct stringArrayValue', () => {
    typedStorage.setItem('stringArrayValue', testObject.stringArrayValue)

    const stringArrayValue = typedStorage.getItem('stringArrayValue');

    expect(Array.isArray(stringArrayValue)).toBe(true);
    expect(stringArrayValue).toHaveLength(3);
    expect(stringArrayValue).toEqual(testObject.stringArrayValue);
  });

  it('should remove stringArrayValue', () => {
    typedStorage.removeItem('stringArrayValue');

    expect(typedStorage.getItem('stringArrayValue')).toEqual(null);
  });
});

describe('TypedStorage set, get and remove number array value', () => {
  it('should retrieve correct numberArrayValue', () => {
    typedStorage.setItem('numberArrayValue', testObject.numberArrayValue)

    const numberArrayValue = typedStorage.getItem('numberArrayValue');

    expect(Array.isArray(numberArrayValue)).toBe(true);
    expect(numberArrayValue).toHaveLength(3);
    expect(numberArrayValue).toEqual(testObject.numberArrayValue);
  });

  it('should remove numberArrayValue', () => {
    typedStorage.removeItem('numberArrayValue');

    expect(typedStorage.getItem('numberArrayValue')).toEqual(null);
  });
});

describe('TypedStorage set, get and remove boolean array value', () => {
  it('should retrieve correct booleanArrayValue', () => {
    typedStorage.setItem('booleanArrayValue', testObject.booleanArrayValue)

    const booleanArrayValue = typedStorage.getItem('booleanArrayValue');

    expect(Array.isArray(booleanArrayValue)).toBe(true);
    expect(booleanArrayValue).toHaveLength(3);
    expect(booleanArrayValue).toEqual(testObject.booleanArrayValue);
  });

  it('should remove booleanArrayValue', () => {
    typedStorage.removeItem('booleanArrayValue');

    expect(typedStorage.getItem('booleanArrayValue')).toEqual(null);
  });
});

describe('TypedStorage set, get and remove empty object value', () => {
  it('should retrieve correct emptyObjectValue', () => {
    typedStorage.setItem('emptyObjectValue', testObject.emptyObjectValue)

    const emptyObjectValue = typedStorage.getItem('emptyObjectValue');

    expect(emptyObjectValue).not.toBeNull();
    expect(typeof emptyObjectValue).toBe('object');

    expect(emptyObjectValue).toEqual(testObject.emptyObjectValue);
  });

  it('should remove emptyObjectValue', () => {
    typedStorage.removeItem('emptyObjectValue');

    expect(typedStorage.getItem('emptyObjectValue')).toEqual(null);
  });
});

describe('TypedStorage set, get and remove object value', () => {
  it('should retrieve correct objectValue', () => {
    typedStorage.setItem('objectValue', testObject.objectValue)

    const objectValue = typedStorage.getItem('objectValue');

    expect(objectValue).not.toBeNull();
    expect(typeof objectValue).toBe('object');

    expect(objectValue).toEqual(testObject.objectValue);
  });

  it('should remove objectValue', () => {
    typedStorage.removeItem('objectValue');

    expect(typedStorage.getItem('objectValue')).toEqual(null);
  });
});

describe('TypedStorage set some values and clear storage', () => {
  it('should correctly set values', () => {
    typedStorage.setItem('stringValue', testObject.stringValue)
    typedStorage.setItem('objectValue', testObject.objectValue)

    const objectValue = typedStorage.getItem('objectValue');

    expect(typedStorage.getItem('stringValue')).toEqual(testObject.stringValue);
    expect(typedStorage.getItem('objectValue')).toEqual(testObject.objectValue);
  });

  it('should clear storage', () => {
    typedStorage.clear();

    expect(typedStorage.getItem('stringValue')).toEqual(null);
    expect(typedStorage.getItem('objectValue')).toEqual(null);
  });
});

describe('TypedStorage set some values and check length', () => {
  it('should correctly set values', () => {
    typedStorage.setItem('stringValue', testObject.stringValue)
    typedStorage.setItem('objectValue', testObject.objectValue)

    expect(typedStorage.length).toEqual(2);
  });

  it('should clear storage', () => {
    typedStorage.clear();
  });
});

describe('TypedStorage set and retrieve invalid json', () => {
  it('should correctly set invalid json and fail retrieving it', () => {
    const invalidJson= '{ count: 3 ';

    window.localStorage.setItem('objectValue', invalidJson);
    expect(() => typedStorage.getItem('objectValue')).toThrow();
  });

  it('should clear storage', () => {
    typedStorage.clear();
  });
});

describe('TypedStorage set and retrieve invalid json in raw retrieval mode', () => {
  it('should correctly set invalid json and retrieve it unparsed', () => {
    const invalidJson= '{ count: 3 ';

    window.localStorage.setItem('objectValue', invalidJson);
    expect(typedStorage.getItem('objectValue', 'raw')).toEqual(invalidJson);
  });

  it('should clear storage', () => {
    typedStorage.clear();
  });
});

describe('TypedStorage set and retrieve invalid json in safe retrieval mode', () => {
  it('should correctly set invalid json and retrieve null', () => {
    const invalidJson= '{ count: 3 ';

    window.localStorage.setItem('objectValue', invalidJson);
    expect(typedStorage.getItem('objectValue', 'safe')).toEqual(null);
  });

  it('should clear storage', () => {
    typedStorage.clear();
  });
});

describe('Initialize TypedStorage with localStorage missing on window', () => {
  it('should use global localStorage if not present on window', () => {
    const { localStorage, ...windowWithoutLocalStorage } = { ...window };
    const globalSpy = jest.spyOn(global, 'localStorage', 'get');
    const windowSpy = jest.spyOn(global, 'window', 'get');
    windowSpy.mockImplementation(() => windowWithoutLocalStorage as Window & typeof globalThis);
    globalSpy.mockImplementation(() => localStorage as Storage);

    const storage = new TypedStorage<Schema>()

    expect(() => storage.length).not.toThrow();
    expect(() =>storage.key(0)).not.toThrow();
    expect(() =>storage.getItem('stringValue')).not.toThrow();
    expect(() =>storage.setItem('stringValue', '')).not.toThrow();
    expect(() =>storage.removeItem('stringValue')).not.toThrow();
    expect(() =>storage.clear()).not.toThrow();
  });
});

describe('Initialize TypedStorage with Web Storage API missing', () => {
  it('should throw exception if Web Storage API is not present', () => {
    const { localStorage } = { ...window };
    const globalSpy = jest.spyOn(global, 'localStorage', 'get');
    const windowSpy = jest.spyOn(global, 'window', 'get');
    windowSpy.mockImplementation(() => null as unknown as Window & typeof globalThis);
    globalSpy.mockImplementation(() => null as unknown as Storage);

    expect(() => new TypedStorage<Schema>()).toThrowError('Web Storage API not found');
  });

  it('should use fallback storage if Web Storage API is not present', () => {
    const memoryStorage = new MemoryStorage()
    const { localStorage, ...windowWithoutLocalStorage } = { ...window };
    const globalSpy = jest.spyOn(global, 'localStorage', 'get');
    const windowSpy = jest.spyOn(global, 'window', 'get');
    windowSpy.mockImplementation(() => windowWithoutLocalStorage as Window & typeof globalThis);
    globalSpy.mockImplementation(() => null as unknown as Storage);

    const storage = new TypedStorage<Schema>({ fallbackStorage: memoryStorage })

    expect(storage).toBeTruthy();
  });
});

describe('Ignore initialization errors', () => {
  it('should ignore initialization error when Web Storage API is not present', () => {
    const { localStorage, ...windowWithoutLocalStorage } = { ...window };
    const globalSpy = jest.spyOn(global, 'localStorage', 'get');
    const windowSpy = jest.spyOn(global, 'window', 'get');
    windowSpy.mockImplementation(() => windowWithoutLocalStorage as Window & typeof globalThis);
    globalSpy.mockImplementation(() => null as unknown as Storage);

    const storage = new TypedStorage<Schema>({ ignoreMissingStorage: true })

    expect(() => storage.length).not.toThrow();
    expect(() =>storage.key(0)).not.toThrow();
    expect(() =>storage.getItem('stringValue')).not.toThrow();
    expect(() =>storage.setItem('stringValue', '')).not.toThrow();
    expect(() =>storage.removeItem('stringValue')).not.toThrow();
    expect(() =>storage.clear()).not.toThrow();
  });
});
