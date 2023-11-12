import { TAvatarProps } from '../lib/types/avatar.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  IComponentProps,
  TProps,
} from '@/shared/lib/component/componentTypes.ts';
import s from './chatAvatar.module.scss';

export class ChatAvatar extends Component {
  constructor(props: TAvatarProps & TProps) {
    const componentProps: IComponentProps = {
      props: {
        ...props,
        className: s.avatarImage,
        attr: {
          alt: props?.alt || 'Аватар пользователя',
          src: props.avatar,
        },
      },
    };
    super('img', componentProps);
  }

  render() {
    return this.compile();
  }
}
