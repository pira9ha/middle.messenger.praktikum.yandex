import Handlebars from 'handlebars';
import chatWrapper from '../../ui/components/chatWrapper.template.ts';
import header from '../../ui/components/header/header.template.ts';
import { Chats } from '@/widgets/chats';
import { Link } from '@/shared/ui/link/Link.ts';
import { Input } from '@/shared/ui/input/Input.ts';
import { Message } from '@/features/message';
import { MessageInput } from '@/widgets/messageInput';

Handlebars.registerPartial('chatWrapper', chatWrapper);
Handlebars.registerPartial('header', header);
Handlebars.registerPartial({
	chats: Chats,
	link: Link,
	input: Input,
	message: Message,
	messageInput: MessageInput,
});
