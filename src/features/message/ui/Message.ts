import Handlebars from 'handlebars';
import message from './message.template.ts';
import { IMessage } from '@/models/chat.ts';

export const Message = (props: IMessage) => {
	props.isMainMessage = props.user_id === props.currentUserId;

	const template = Handlebars.compile(message);
	return template(props);
};