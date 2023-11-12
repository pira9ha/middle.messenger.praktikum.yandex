import Handlebars from 'handlebars';
import s from './chatPage.module.scss';
import '../lib/utils/registerPartials';
import chatPage from './chatPage.template.ts';
import { context } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  TChatPageChildren,
  TChatPageContext,
} from '@/pages/chats-page/lib/types/chat.ts';
import {
  IComponentProps,
  TProps,
} from '@/shared/lib/component/componentTypes.ts';
import { ChatContent } from './components/chatContent/ChatContent.ts';
import { Aside } from '../ui/components/aside/Aside.ts';

export class ChatsPageComponent extends Component {
  constructor(chatPageProps: TChatPageContext) {
    const props: TChatPageContext & TProps = {
      ...chatPageProps,
      className: s.chatPageLayout,
    };

    const children: TChatPageChildren = {
      chats: new Aside(props.chatsContext),
      chat: new ChatContent(props.chat),
    };

    const componentProps: IComponentProps<TChatPageChildren> = {
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

export const ChatsPage = () => new ChatsPageComponent(context());
