import Handlebars from 'handlebars';
import messageInput from './messageInput.template.ts';
import { TMessageInputProps } from '../lib/types/messageInput.ts';

export const MessageInput = (props: TMessageInputProps) => {
	const template = Handlebars.compile(messageInput);
	return template(props);
};
