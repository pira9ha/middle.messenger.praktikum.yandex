import { TMainPageContext } from '../../lib/types/mainPage.ts';
import { ChatsPage, LoginPage, NotFoundPage, ServerErrorPage, SigninPage } from '@/pages';
import s from '../../ui/mainPage.module.scss';
import { ProfilePage } from '@/pages/profile-page/ui/ProfilePage.ts';

export const context: TMainPageContext = {
	login: {
		name: 'login',
		component: () => LoginPage(),
		link: {
			path: '/login',
			title: 'Страница авторизации',
			className: s.link
		},
	},
	signin: {
		name: 'signin',
		component: () => SigninPage(),
		link: {
			path: '/login',
			title: 'Страница регистрации',
			className: s.link
		},
	},
	chats: {
		name: 'chats',
		component: () => ChatsPage(),
		link: {
			path: '/chats',
			title: 'Страница чатов',
			className: s.link
		},
	},
	profile: {
		name: 'profile',
		component: () => ProfilePage(),
		link: {
			path: '/profile',
			title: 'Профиль пользователя',
			className: s.link
		},
	},
	serverError: {
		name: 'serverError',
		component: () => ServerErrorPage(),
		link: {
			path: '/secret-page',
			title: 'Страница ошибки 404',
			className: s.link
		},
	},
	notFound: {
		name: 'notFound',
		component: () => NotFoundPage(),
		link: {
			path: '/server-error',
			title: 'Страница ошибок сервера',
			className: s.link
		},
	},
};