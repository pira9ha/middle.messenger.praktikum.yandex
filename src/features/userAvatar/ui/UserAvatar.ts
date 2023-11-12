import Handlebars from 'handlebars';
import userAvatar from './userAvatar.template.ts';
import { IUserAvatarProps, TUserAvatarChildren } from '../lib/types/avatar.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './userAvatar.module.scss';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import { Avatar } from '@/features/userAvatar/ui/components/avatar/Avatar.ts';

export class UserAvatar extends Component {
  constructor(props: IUserAvatarProps) {
    const componentProps: IComponentProps<TUserAvatarChildren> = {
      props: {
        ...props,
        className: s.avatar,
      },
      children: {
        avatar: new Avatar({ ...props }),
      },
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(userAvatar);
    return this.compile(template);
  }
}
