
export default interface StorageService {
  setItem(key: string, value: any): void;
  getItem(key: string): any;
  removeItem(key: string): void;
}
