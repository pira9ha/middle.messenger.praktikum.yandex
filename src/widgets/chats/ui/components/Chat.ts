import Handlebars from 'handlebars';
import chat from './chat.template.ts';
import {
  TChatContext,
  TChatChildren,
  ChatProps,
} from '../../lib/types/chats.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './chat.module.scss';
import { ChatAvatar } from '@/shared/ui/chatAvatar';
import { convertDate } from '@/shared/lib/utils/convertDate.ts';
import store from '@/shared/lib/store/Store.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import chatsService from '@/service/ChatsService.ts';

export class Chat extends Component<ChatProps, TChatChildren> {
  constructor(chatProps: TChatContext) {
    const { activeChat } = store.getState();

    const props: ChatProps = {
      ...chatProps,
      chatId: chatProps.id,
      time: convertDate({
        date: new Date(chatProps.created_by),
        format: 'full',
      }),
      className: s.chat,
      attr: {
        'data-active': `${activeChat && activeChat === chatProps.id}`,
      },
      events: {
        click: async () => {
          await chatsService.getChatUsers(chatProps.id);
          store.setState('activeChat', chatProps.id);
        },
      },
    };

    const children: TChatChildren = {
      avatar: new ChatAvatar({
        avatar: props.avatar,
      }),
    };

    const componentProps = {
      props,
      children,
    };
    super('div', componentProps);
  }

  setProps(nextProps: Partial<ChatProps> | ChatProps) {
    const element = this.getContent();

    if (nextProps?.activeChat && element) {
      if (nextProps?.activeChat === this.props.chatId) {
        element.setAttribute('data-active', 'true');
      } else {
        element.removeAttribute('data-active');
      }
    }

    super.setProps(nextProps);
  }

  render() {
    const template = Handlebars.compile(chat);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  activeChat: state?.activeChat,
}));

export const ChatElement = stateConnect(Chat);
