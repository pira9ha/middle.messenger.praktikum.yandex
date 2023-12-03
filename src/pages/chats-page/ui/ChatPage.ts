import Handlebars from 'handlebars';
import s from './chatPage.module.scss';
import chatPage from './chatPage.template.ts';
import { context } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  TChatPageChildren,
  TChatPageContext,
} from '@/pages/chats-page/lib/types/chat.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { ChatContent } from './components/chatContent/ChatContent.ts';
import { Aside } from '../ui/components/aside/Aside.ts';

export class ChatsPage extends Component<TDefaultProps, TChatPageChildren> {
  constructor() {
    const chatPageProps = context();
    const props: TChatPageContext & TDefaultProps = {
      ...chatPageProps,
      className: s.chatPageLayout,
    };

    const children: TChatPageChildren = {
      chats: new Aside(props.chatsContext),
      chat: new ChatContent(props.chat),
    };

    const componentProps = {
      props,
      children,
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(chatPage);
    return this.compile(template);
  }
}
