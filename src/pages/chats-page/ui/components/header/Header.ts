import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import {
  IComponentProps,
  TProps,
} from '@/shared/lib/component/componentTypes.ts';
import s from './header.module.scss';
import header from './header.template.ts';
import { ChatAvatar } from '@/shared/ui/chatAvatar';
import { THeader, THeaderChildren } from '../../../lib/types/chat.ts';
import { Dropdown } from '@/shared/ui/dropdown';

export class Header extends Component {
  constructor(props: THeader & TProps) {
    const componentProps: IComponentProps<THeaderChildren> = {
      props: {
        ...props,
        className: s.chatHeader,
      },
      children: {
        dropdownMenu: new Dropdown(props.menu),
        avatar: new ChatAvatar(props.avatar),
      },
    };
    super('header', componentProps);
  }

  render() {
    const template = Handlebars.compile(header);
    return this.compile(template);
  }
}
