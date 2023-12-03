import router from '@/shared/lib/router/Router.ts';
import { ProtectedPages, Pages, Routes } from '@/shared/constants/routes.ts';
import AuthService from '@/service/AuthService.ts';
import storageController from '@/shared/lib/StorageController/StorageController.ts';
import { CURRENT_USER } from '@/shared/constants/storageKeys.ts';

document.addEventListener('DOMContentLoaded', async () => {
  Object.keys(Pages).forEach((key) => router.use(key, Pages[key]));

  router.start();

  let storageUser = storageController.getItem(CURRENT_USER);

  if (!storageUser) {
    await AuthService.user();
    storageUser = storageController.getItem(CURRENT_USER);
  }

  if (!storageUser && ProtectedPages.includes(window.location.pathname)) {
    router.go(Routes.LOGIN);
  }
});
