import store from '@/shared/lib/store/Store.ts';

class StorageController {
  private static _instance: StorageController;

  constructor() {
    if (StorageController._instance) {
      return StorageController._instance;
    }

    StorageController._instance = this;
  }

  setItem(key: string, value: unknown) {
    const _value = JSON.stringify(value);

    localStorage.setItem(key, _value);

    return true;
  }

  getItem(key: string) {
    const data = localStorage.getItem(key);

    if (data === null) {
      return false;
    }

    try {
      return JSON.parse(data);
    } catch (e) {
      if (e instanceof Error) {
        store.setState('error', e.message);
      }
    }
  }

  deleteItem(key: string) {
    localStorage.removeItem(key);
  }
}

export default new StorageController();
