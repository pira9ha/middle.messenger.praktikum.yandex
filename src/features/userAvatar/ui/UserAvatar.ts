import Handlebars from 'handlebars';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import Component from '@/shared/lib/component/Component.ts';
import userAvatar from './userAvatar.template.ts';
import { IUserAvatarProps, TUserAvatarChildren } from '../lib/types/avatar.ts';
import s from './userAvatar.module.scss';
import { Avatar } from './components/avatar/Avatar.ts';
import { AvatarEdit } from './components/avatarEdit/AvatarEdit.ts';
import { Modal } from '@/features/modal';
import { modalContext } from '@/features/userAvatar/lib/context/modal.ts';

export class UserAvatar extends Component<
  IUserAvatarProps & TDefaultProps,
  TUserAvatarChildren
> {
  constructor(props: IUserAvatarProps) {
    const isModalOpen = Boolean(props?.isModalOpen);
    console.log(isModalOpen);
    const modalHandler = () => {
      this.setProps({ isModalOpen: !this.props.isModalOpen });
    };

    const componentProps = {
      props: {
        ...props,
        className: s.avatar,
        isModalOpen,
      },
      children: {
        avatar: new Avatar({ ...props }),
        avatarEdit: new AvatarEdit({
          styleName: s.changeAvatar,
          onClick: modalHandler,
        }),
        modal: new Modal({
          ...modalContext,
          isOpen: isModalOpen,
          handleClose: modalHandler,
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
