import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import s from './chats.module.scss';
import chats from './chats.template.ts';
import { TChatsProps, TChatsChildren } from '../lib/types/chats.ts';
import { Chat, ChatElement } from './components/Chat.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import { chatsContext } from '../lib/utils/context.ts';
import { isEqual } from '@/shared/lib/utils/isEqual.ts';

export class Chats extends Component<
  TChatsProps & TDefaultProps,
  TChatsChildren
> {
  constructor() {
    const { chats } = chatsContext();

    const props: TChatsProps & TDefaultProps = {
      chats,
      className: s.chatsFeed,
    };

    const children: TChatsChildren = {
      chats: chats.map((chatElement) => new ChatElement(chatElement)),
    };

    const componentProps = {
      props,
      children,
    };
    super('div', componentProps);
  }

  setProps(
    nextProps:
      | Partial<TChatsProps & TDefaultProps>
      | (TChatsProps & TDefaultProps),
  ) {
    if (!this.props.chats.length && nextProps.chats?.length) {
      this.children.chats = nextProps.chats.map(
        (chatElement) => new ChatElement(chatElement),
      ) as Chat[];
    }

    if (nextProps.chats?.length) {
      if (this.props.chats?.length < nextProps.chats?.length) {
        const chatChildren = this.children.chats as Chat[];

        nextProps.chats?.forEach((chat) => {
          const currentChatChild = chatChildren.find(
            (chatChild) => chatChild.props.chatId === chat.id,
          );

          if (!currentChatChild) {
            chatChildren.unshift(new ChatElement(chat));
            return;
          }

          const chatProps = this.props.chats.find(
            (chatProp) => chatProp.id === chat.id,
          );

          if (chatProps && !isEqual(chat, chatProps)) {
            currentChatChild.setProps(chat);
          }
        });
      } else {
        const chatChildren = this.children.chats as Chat[];

        this.children.chats = chatChildren?.filter((chatChild) => {
          const currentChatChild = nextProps.chats?.find(
            (chat) => chatChild.props.chatId === chat.id,
          );

          return currentChatChild;
        });
      }
    }

    super.setProps({ ...nextProps });
  }

  render() {
    const template = Handlebars.compile(chats);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  chats: [...(state?.chats ?? [])],
}));

export const ChatsList = stateConnect(Chats);
