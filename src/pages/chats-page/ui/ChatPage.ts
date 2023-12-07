import Handlebars from 'handlebars';
import s from './chatPage.module.scss';
import chatPage from './chatPage.template.ts';
import { chatsContext, context } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  TChatPageChildren,
  TChatPageContext,
} from '@/pages/chats-page/lib/types/chat.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { ChatContent } from './components/chatContent/ChatContent.ts';
import { AsideComponent } from '../ui/components/aside/Aside.ts';
import { Routes } from '@/shared/constants/routes.ts';
import { searchIcon } from '@/shared/svg';
import chatsService from '@/service/ChatsService.ts';

export class ChatsPage extends Component<TDefaultProps, TChatPageChildren> {
  constructor() {
    chatsService.getChats();

    const chatPageProps = context();
    const chats = chatsContext();

    const props: TChatPageContext & TDefaultProps = {
      ...chatPageProps,
      className: s.chatPageLayout,
    };

    const children: TChatPageChildren = {
      chats: new AsideComponent({
        chats,
        link: {
          path: Routes.PROFILE,
          title: 'Мой профиль',
          classNames: s.chatsLink,
        },
        searchInput: {
          input: {
            placeholder: 'Поиск',
            name: 'search',
            className: s.searchInput,
          },
          label: {
            labelText: '',
            for: 'search',
          },
          icon: searchIcon,
          iconStyle: s.searchIcon,
        },
      }),
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
