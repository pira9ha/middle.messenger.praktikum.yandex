import router from '@/shared/lib/router/Router.ts';
import { Pages, Routes } from '@/shared/constants/routes.ts';
import authService from '@/service/AuthService.ts';
import store from '@/shared/lib/store/Store.ts';

document.addEventListener('DOMContentLoaded', async () => {
  const currentPath = window.location.pathname;

  Object.keys(Pages).forEach((key) => router.use(key, Pages[key]));

  router.start();

  await authService.user();
  const { user } = store.getState();

  if (user && currentPath === Routes.LOGIN) {
    router.go(Routes.CHATS);
  } else {
    router.go(Routes.LOGIN);
  }
});
