import Handlebars from 'handlebars';
import loginPage from './loginPage.template';
import card from '@/shared/ui/card/card.template'
import mainLayout from '@/shared/ui/layouts/main/mainLayout.template'

Handlebars.registerPartial({
	card,
	mainLayout,
});

export const LoginPage = () => {
	const template = Handlebars.compile(loginPage);
	return template({ name: 'login'});
};
