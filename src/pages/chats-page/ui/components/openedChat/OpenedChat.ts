import Handlebars from 'handlebars';
import s from './chatContent.module.scss';
import chatContent from './chatContent.template.ts';
import Component from '@/shared/lib/component/Component.ts';
import { ChatChildren } from '@/pages/chats-page/lib/types/chat.ts';
import {
  IComponentProps,
  TDefaultProps,
} from '@/shared/lib/component/componentTypes.ts';
import { MessageForm } from '@/widgets/messageForm/ui/MessageForm.ts';
import { ChatHeader } from '@/pages/chats-page/ui/components/header/Header.ts';
import { Message } from '@/features/message';
import store from '@/shared/lib/store/Store.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';

export class OpenedChat extends Component<TDefaultProps, ChatChildren> {
  constructor() {
    const state = store.getState();

    const componentProps: IComponentProps<TDefaultProps, ChatChildren> = {
      props: {
        className: s.chatWrapper,
      },
      children: {
        messageForm: new MessageForm(),
        header: new ChatHeader(),
        messages: state?.messages?.map((message) => new Message(message)),
      },
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(chatContent);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  activeChat: state?.activeChat,
  messages: state?.messages,
}));

export const OpenedChatElement = stateConnect(OpenedChat);
