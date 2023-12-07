import router from '@/shared/lib/router/Router.ts';
import { ProtectedPages, Pages, Routes } from '@/shared/constants/routes.ts';
import storageController from '@/shared/lib/StorageController/StorageController.ts';
import { CURRENT_USER } from '@/shared/constants/storageKeys.ts';
import authService from '@/service/AuthService.ts';

document.addEventListener('DOMContentLoaded', async () => {
  const currentPath = window.location.pathname;

  Object.keys(Pages).forEach((key) => router.use(key, Pages[key]));

  router.start();

  let storageUser = storageController.getItem(CURRENT_USER);

  if (!storageUser) {
    await authService.user();
    storageUser = storageController.getItem(CURRENT_USER);
  }

  if (storageUser && currentPath === Routes.LOGIN) {
    router.go(Routes.CHATS);
  } else if (!storageUser && ProtectedPages.includes(currentPath)) {
    router.go(Routes.LOGIN);
  }
});
