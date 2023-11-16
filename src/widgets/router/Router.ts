import {
  LoginPage,
  MainPage,
  NotFoundPage,
  ServerErrorPage,
  SigninPage,
  ProfilePage,
  ChatsPage,
  ProfileEditPage,
  ProfileEditPasswordPage,
} from '@/pages';
import Component from '@/shared/lib/component/Component.ts';
import { Routes } from './routes.ts';

export const Router = (rootElement: Element) => {
  const currentPath = window.location.pathname;

  const pages: Record<string, () => Component> = {
    [Routes.MAIN]: MainPage,
    [Routes.LOGIN]: LoginPage,
    [Routes.SIGNIN]: SigninPage,
    [Routes.SERVER_ERROR]: ServerErrorPage,
    [Routes.PROFILE]: ProfilePage,
    [Routes.PROFILE_EDIT]: ProfileEditPage,
    [Routes.PROFILE_PASSWORD_EDIT]: ProfileEditPasswordPage,
    [Routes.CHATS]: ChatsPage,
  };

  let currentPage;

  if (Object.keys(pages).includes(currentPath)) {
    currentPage = pages[currentPath]();
  } else {
    currentPage = NotFoundPage();
  }

  const page = currentPage.getContent();

  if (page) {
    rootElement.appendChild(page);
  } else {
    throw new Error('Page element not exist');
  }
};
