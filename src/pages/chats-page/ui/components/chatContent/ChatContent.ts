import Handlebars from 'handlebars';
import s from './chatContent.module.scss';
import chatContent from './chatContent.template.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  TChatContentChildren,
  TOpenedChat,
} from '@/pages/chats-page/lib/types/chat.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import { MessageForm } from '@/widgets/messageForm/ui/MessageForm.ts';
import { Header } from '@/pages/chats-page/ui/components/header/Header.ts';
import { Message } from '@/features/message';

export class ChatContent extends Component {
  constructor(chatContentProps?: TOpenedChat) {
    const componentProps: IComponentProps<TChatContentChildren> = {
      props: {
        ...chatContentProps,
        isChatOpen: Boolean(chatContentProps),
        className: s.chatWrapper,
      },
    };

    if (chatContentProps) {
      componentProps.children = {
        messageForm: new MessageForm(chatContentProps.messageFormContext),
        header: new Header(chatContentProps.chatContext),
        messages: chatContentProps.messages.map(
          (message) => new Message(message),
        ),
      };
    }

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(chatContent);
    return this.compile(template);
  }
}
