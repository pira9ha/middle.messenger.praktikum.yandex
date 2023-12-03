import Handlebars from 'handlebars';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import Component from '@/shared/lib/component/Component.ts';
import userAvatar from './userAvatar.template.ts';
import { IUserAvatarProps, TUserAvatarChildren } from '../lib/types/avatar.ts';
import s from './userAvatar.module.scss';
import { AvatarComponent } from './components/avatar/Avatar.ts';
import { AvatarEdit } from './components/avatarEdit/AvatarEdit.ts';
import { modalContext } from '../lib/context/modal.ts';
import modalsController from '@/shared/lib/ModalsController/ModalsController.ts';

export class UserAvatar extends Component<
  IUserAvatarProps & TDefaultProps,
  TUserAvatarChildren
> {
  constructor(props: IUserAvatarProps) {
    const isModalOpen = Boolean(props?.isModalOpen);
    const openModalHandler = () => {
      modalsController.openModal(modalContext);
    };

    const componentProps = {
      props: {
        ...props,
        className: s.avatar,
        isModalOpen,
      },
      children: {
        avatar: new AvatarComponent({ ...props }),
        avatarEdit: new AvatarEdit({
          styleName: s.changeAvatar,
          onClick: openModalHandler,
        }),
      },
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(userAvatar);
    return this.compile(template);
  }
}
