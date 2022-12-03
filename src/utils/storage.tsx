export default class StorageService {
  static set(key: string, data: any) {
    return localStorage.setItem(key, JSON.stringify(data));
  }

  static get(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  static remove(key: string) {
    return localStorage.removeItem(key);
  }
}
