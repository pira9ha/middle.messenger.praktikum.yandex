import Handlebars from 'handlebars';
import s from './chatContent.module.scss';
import chatContent from './chatContent.template.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  ChatContentChildren,
  ChatContentProps,
} from '@/pages/chats-page/lib/types/chat.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import { OpenedChatElement } from '../openedChat/OpenedChat.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import store from '@/shared/lib/store/Store.ts';

export class ChatContent extends Component<
  ChatContentProps,
  ChatContentChildren
> {
  constructor() {
    const state = store.getState();

    const componentProps: IComponentProps<
      ChatContentProps,
      ChatContentChildren
    > = {
      props: {
        isChatOpen: Boolean(state?.activeChat),
        className: s.chatWrapper,
      },
      children: {
        chat: new OpenedChatElement(),
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
  isChatOpen: Boolean(state?.activeChat),
  chat: state?.activeChat,
}));

export const ChatContentElement = stateConnect(ChatContent);
