import Handlebars from 'handlebars';
import chatAvatar from './chatAvatar.template.ts';
import { IAvatarProps } from '../lib/types/avatar.ts';

export const ChatAvatar = (props: IAvatarProps) => {
	const template = Handlebars.compile(chatAvatar);
	return template(props);
};