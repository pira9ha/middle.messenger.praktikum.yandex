import {
  ChatsPage,
  LoginPage,
  NotFoundPage,
  ProfileEditPasswordPage,
  ProfilePage,
  ProfileSettingsPage,
  ServerErrorPage,
  SigninPage,
} from '@/pages';
import { TComponentConstructor } from '../lib/router/routeTypes.ts';
import { Routes } from './routes.ts';

export const Pages: Record<string, TComponentConstructor> = {
  [Routes.LOGIN]: LoginPage,
  [Routes.SIGNIN]: SigninPage,
  [Routes.SERVER_ERROR]: ServerErrorPage,
  [Routes.PROFILE]: ProfilePage,
  [Routes.PROFILE_EDIT]: ProfileSettingsPage,
  [Routes.PROFILE_PASSWORD_EDIT]: ProfileEditPasswordPage,
  [Routes.CHATS]: ChatsPage,
  [Routes.NOT_FOUND]: NotFoundPage,
};

export const AssignedPages: string[] = [
  Routes.LOGIN,
  Routes.SIGNIN,
  Routes.SERVER_ERROR,
];

export const ProtectedPages = Object.values(Routes)
  .map((value) => {
    if (!AssignedPages.includes(value)) {
      return String(value);
    }
  })
  .filter((route) => route);
