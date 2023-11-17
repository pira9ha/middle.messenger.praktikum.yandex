import Component from '@/shared/lib/component/Component.ts';
import s from './avatar.module.scss';
import { TAvatarProps } from '../../../lib/types/avatar.ts';
import { DEFAULT_AVATAR } from '@/shared/constants/avatar.ts';

export class Avatar extends Component {
  constructor(props: TAvatarProps) {
    const componentProps = {
      props: {
        className: s.avatarImage,
        attr: {
          alt: props?.altText || `Аватар пользователя ${props.name}`,
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
