import Handlebars from 'handlebars';
import s from './chatContent.module.scss';
import chatContent from './chatContent.template.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  ChatChildren,
  OpenedChatProps,
} from '@/pages/chats-page/lib/types/chat.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import { MessageForm } from '@/widgets/messageForm/ui/MessageForm.ts';
import { ChatHeader } from '@/pages/chats-page/ui/components/header/Header.ts';
import { Message } from '@/features/message';
import store from '@/shared/lib/store/Store.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';

export class OpenedChat extends Component<OpenedChatProps, ChatChildren> {
  constructor() {
    const state = store.getState();
    const chatMessages = state?.activeChat
      ? state?.messages?.[state?.activeChat] ?? []
      : [];

    const componentProps: IComponentProps<OpenedChatProps, ChatChildren> = {
      props: {
        ...state,
        messages: chatMessages,
        className: s.chatWrapper,
      },
      children: {
        messageForm: new MessageForm(),
        header: new ChatHeader(),
        messages: chatMessages
          ?.reverse()
          ?.map((message) => new Message(message)),
      },
    };

    super('div', componentProps);
  }

  scrollDown() {
    const element = this.getContent();

    if (element) {
      const messages = element.querySelector("[data-name='messages']");

      if (messages) {
        messages.scrollTo(0, element.scrollHeight);
      }
    }
  }

  setProps(nextProps: Partial<OpenedChatProps> | OpenedChatProps) {
    if (nextProps?.messages) {
      const messagesChildren: Message[] = nextProps?.messages
        .reverse()
        .map((message) => new Message(message));
      this.children.messages = [...messagesChildren];
    }

    super.setProps(nextProps);
    this.scrollDown();
  }

  render() {
    const template = Handlebars.compile(chatContent);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  activeChat: state?.activeChat,
  messages: [
    ...(state?.activeChat ? state?.messages?.[state?.activeChat] ?? [] : []),
  ].reverse(),
}));

export const OpenedChatElement = stateConnect(OpenedChat);
