import storageController from '@/shared/lib/StorageController/StorageController.ts';
import { CURRENT_USER } from '@/shared/constants/storageKeys.ts';
import store from '@/shared/lib/store/Store.ts';

export const updateUser = (user: string) => {
  storageController.setItem(CURRENT_USER, user);
  store.setState('user', JSON.parse(user));
};
