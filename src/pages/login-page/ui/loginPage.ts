import Handlebars from 'handlebars';
import '../lib/utils/registerPartials.ts';
import loginPage from './loginPage.template';
import {context} from "../lib/context/context.ts";

export const LoginPage = () => {
	const template = Handlebars.compile(loginPage);
	return template(context);
};
