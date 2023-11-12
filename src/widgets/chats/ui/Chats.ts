import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import s from './chats.module.scss';
import chats from './chats.template.ts';
import { TChatsProps, TChatsChildren } from '../lib/types/chats.ts';
import { Chat } from './components/Chat.ts';

export class Chats extends Component {
  constructor(props: TChatsProps) {
    const componentProps: IComponentProps<TChatsChildren> = {
      props: {
        ...props,
        className: s.chatsFeed,
      },
      children: {
        chats: props.chats.map((chatElement) => new Chat(chatElement)),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(chats);
    return this.compile(template);
  }
}
