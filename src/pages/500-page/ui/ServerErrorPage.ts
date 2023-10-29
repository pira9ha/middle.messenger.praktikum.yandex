import Handlebars from 'handlebars';
import '../lib/utils/registerPartials.ts';
import serverErrorPage from './serverErrorPage.template';
import { context } from '@/pages/500-page/lib/context/context.ts';

export const ServerErrorPage = () => {
	const template = Handlebars.compile(serverErrorPage);
	return template(context);
};
