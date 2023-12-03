import {
  ChatsPage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  ServerErrorPage,
  SigninPage,
} from '@/pages';
import { TComponentConstructor } from '@/shared/lib/router/routeTypes.ts';
import { ProfileEdit, ProfileEditPassword } from '@/pages/profile-page';

export enum Routes {
  PROFILE = '/profile',
  PROFILE_EDIT = '/settings',
  PROFILE_PASSWORD_EDIT = '/edit-password',
  LOGIN = '/',
  SIGNIN = '/sign-up',
  CHATS = '/messenger',
  SERVER_ERROR = '/server-error',
  NOT_FOUND = '*',
}

export const Pages: Record<string, TComponentConstructor> = {
  [Routes.LOGIN]: LoginPage,
  [Routes.SIGNIN]: SigninPage,
  [Routes.SERVER_ERROR]: ServerErrorPage,
  [Routes.PROFILE]: ProfilePage,
  [Routes.PROFILE_EDIT]: ProfileEdit,
  [Routes.PROFILE_PASSWORD_EDIT]: ProfileEditPassword,
  [Routes.CHATS]: ChatsPage,
  [Routes.NOT_FOUND]: NotFoundPage,
};

export const AssignedPages: string[] = [
  Routes.LOGIN,
  Routes.SIGNIN,
  Routes.SERVER_ERROR,
];

export const ProtectedPages = Object.values(Routes).map((value) => {
  if (!AssignedPages.includes(value)) {
    return String(value);
  }
});
