import Handlebars from 'handlebars';
import chat from './chat.template.ts';
import { TChatContext, TChatChildren } from '../../lib/types/chats.ts';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import s from './chat.module.scss';
import { ChatAvatar } from '@/shared/ui/chatAvatar';
import { convertDate } from '@/shared/lib/utils/convertDate.ts';

export class Chat extends Component<
  TChatContext & TDefaultProps,
  TChatChildren
> {
  constructor(chatProps: TChatContext) {
    const props: TChatContext & TDefaultProps = {
      ...chatProps,
      time: convertDate({
        date: chatProps.time,
        format: 'full',
      }),
      className: s.chat,
      attr: {
        id: chatProps.id,
        'data-active': `${!!chatProps.isActive}`,
      },
      events: {
        click: () => {
          const chatUrl = new URL(location.href);
          chatUrl.searchParams.set('chat', props.id.toString());
          location.assign(chatUrl);
        },
      },
    };

    const children: TChatChildren = {
      avatar: new ChatAvatar(props.userAvatar),
    };

    const componentProps = {
      props,
      children,
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(chat);
    return this.compile(template);
  }
}
