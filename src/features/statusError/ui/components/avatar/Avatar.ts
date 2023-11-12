import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import s from './avatar.module.scss';
import { TAvatarProps } from '../../../lib/types/statusError.ts';

export class Avatar extends Component {
  constructor(props: TAvatarProps) {
    const componentProps: IComponentProps = {
      props: {
        ...props,
        className: s.avatarImage,
        attr: {
          alt: props?.altText || `Аватар пользователя ${props.name}`,
          src: props.avatar || './src/assets/img/default_avatar.png',
        },
      },
    };
    super('img', componentProps);
  }

  render() {
    return this.compile();
  }
}
