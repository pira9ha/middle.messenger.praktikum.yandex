import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import s from './chats.module.scss';
import chats from './chats.template.ts';
import { TChatsProps, TChatsChildren } from '../lib/types/chats.ts';
import { Chat } from './components/Chat.ts';

export class Chats extends Component<
  TChatsProps & TDefaultProps,
  TChatsChildren
> {
  constructor(chatProps: TChatsProps) {
    const props: TChatsProps & TDefaultProps = {
      ...chatProps,
      className: s.chatsFeed,
    };

    const children: TChatsChildren = {
      chats: chatProps.chats.map((chatElement) => new Chat(chatElement)),
    };

    const componentProps = {
      props,
      children,
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(chats);
    return this.compile(template);
  }
}
