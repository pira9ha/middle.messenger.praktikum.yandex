import Handlebars from 'handlebars';
import mainPage from './mainPage.template';
import {Link, TLinkProps} from "@/shared/ui/link/Link";
import {LoginPage} from "@/pages/login-page";

type TPage = {
	name: string;
	component(): string;
	link: TLinkProps;
};
type TPagesContext = Record<string, TPage | any>;

Handlebars.registerPartial({
	link: Link,
})

export const MainPage = () => {
	const pages: TPagesContext = {
		login: {
			name: 'login',
			component: () => LoginPage(),
			link: {
				path: '/login',
				title: 'go to login',
			},
		},
	};

	const template = Handlebars.compile(mainPage);
	return template({ pages });
};
