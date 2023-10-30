import Handlebars from 'handlebars';
import '../lib/utils/registerPartials';
import chats from './chats.template.ts';
import { IChatsProps } from '../lib/types/chats.ts';

export const Chats = (props: IChatsProps) => {
	const template = Handlebars.compile(chats);
	return template(props);
};
