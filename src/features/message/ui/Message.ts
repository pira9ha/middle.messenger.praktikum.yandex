import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import message from './message.template.ts';
import s from './message.module.scss';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { TMessageProps } from '../lib/types/message.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import store from '@/shared/lib/store/Store.ts';
import { convertDate } from '@/shared/lib/utils/convertDate.ts';

export class Message extends Component<TMessageProps & TDefaultProps> {
  constructor(messageProps: TMessageProps) {
    const state = store.getState();
    const isMainMessage = messageProps.user_id === state?.user?.id;

    const componentProps = {
      props: {
        ...messageProps,
        className: classNames(s.messageWrapper, [], {
          [s.mainMessage]: isMainMessage,
        }),
        isMainMessage,
        time: convertDate({ date: messageProps.time }),
      },
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(message);
    return this.compile(template);
  }
}
