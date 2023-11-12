import { TMainPageContext } from '../../lib/types/mainPage.ts';
import {
  ChatsPage,
  LoginPage,
  NotFoundPage,
  ServerErrorPage,
  SigninPage,
} from '@/pages';
import { ProfilePage } from '@/pages/profile-page/ui/ProfilePage.ts';

export const context: TMainPageContext = {
  login: {
    name: 'login',
    component: () => LoginPage(),
    link: {
      path: '/login',
      title: 'Страница авторизации',
    },
  },
  signin: {
    name: 'signin',
    component: () => SigninPage(),
    link: {
      path: '/signin',
      title: 'Страница регистрации',
    },
  },
  chats: {
    name: 'chats',
    component: () => ChatsPage(),
    link: {
      path: '/chats',
      title: 'Страница чатов',
    },
  },
  profile: {
    name: 'profile',
    component: () => ProfilePage(),
    link: {
      path: '/profile',
      title: 'Профиль пользователя',
    },
  },
  serverError: {
    name: 'serverError',
    component: () => ServerErrorPage(),
    link: {
      path: '/secret-page',
      title: 'Страница ошибки 404',
    },
  },
  notFound: {
    name: 'notFound',
    component: () => NotFoundPage(),
    link: {
      path: '/server-error',
      title: 'Страница ошибок сервера',
    },
  },
};
