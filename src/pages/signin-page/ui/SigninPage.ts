import Handlebars from 'handlebars';
import '../lib/utils/registerPartials.ts';
import signinPage from './signinPage.template';
import { context } from '@/pages/signin-page/lib/context/context.ts';

export const SigninPage = () => {
	const template = Handlebars.compile(signinPage);
	return template(context);
};
