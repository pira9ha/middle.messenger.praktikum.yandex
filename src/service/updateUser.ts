import store from '@/shared/lib/store/Store.ts';

export const updateUser = (user: string) => {
  store.setState('user', JSON.parse(user));
};
