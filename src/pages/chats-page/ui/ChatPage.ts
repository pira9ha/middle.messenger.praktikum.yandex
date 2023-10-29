import Handlebars from 'handlebars';
import '../lib/utils/registerPartials';
import chatPage from './chatPage.template.ts';
import { context } from '../lib/context/context.ts';

export const ChatsPage = () => {
	const template = Handlebars.compile(chatPage);
	return template(context());
};