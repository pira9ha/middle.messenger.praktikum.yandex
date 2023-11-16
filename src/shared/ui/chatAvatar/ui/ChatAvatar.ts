import { TAvatarProps } from '../lib/types/avatar.ts';
import s from './chatAvatar.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { DEFAULT_AVATAR } from '@/shared/constants/avatar.ts';

export class ChatAvatar extends Component {
  constructor(props: TAvatarProps) {
    const componentProps = {
      props: {
        className: s.avatarImage,
        attr: {
          alt: props?.alt || 'Аватар пользователя',
          src: props?.avatar || DEFAULT_AVATAR,
        },
      },
    };
    super('img', componentProps);
  }

  render() {
    return this.compile();
  }
}
