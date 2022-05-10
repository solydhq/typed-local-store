export class MemoryStorage implements Storage {
  private readonly storage: Map<string, string>;

  constructor() {
    this.storage = new Map<string, string>();
  }

  public get length(): number {
    return Array.from(this.storage.keys()).length;
  }

  public key(index: number): string {
    return Array.from(this.storage.keys())[index];
  }

  public getItem(key: string): string | null {
    return this.storage.get(key) || null;
  }

  public setItem(key: string, value: string): void {
    this.storage.set(key, value);
  }

  public removeItem(key: string): void {
    this.storage.delete(key);
  }

  public clear(): void {
    this.storage.clear();
  }
}
