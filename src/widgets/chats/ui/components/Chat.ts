import Handlebars from 'handlebars';
import chat from './chat.template.ts';
import { TChatContext, TChatChildren } from '../../lib/types/chats.ts';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import s from './chat.module.scss';
import { ChatAvatar } from '@/shared/ui/chatAvatar';
import { convertDate } from '@/shared/lib/utils/convertDate.ts';

export class Chat extends Component {
  constructor(props: TChatContext) {
    const componentProps: IComponentProps<TChatChildren> = {
      props: {
        ...props,
        time: convertDate({
          date: props.time,
          format: 'full',
        }),
        className: s.chat,
        attr: {
          id: props.id,
          'data-active': props.isActive,
        },
        events: {
          click: () => {
            const chatUrl = new URL(location.href);
            chatUrl.searchParams.set('chat', props.id.toString());
            location.assign(chatUrl);
          },
        },
      },
      children: {
        avatar: new ChatAvatar(props.userAvatar),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(chat);
    return this.compile(template);
  }
}
