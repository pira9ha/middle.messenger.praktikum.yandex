import Handlebars from 'handlebars';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import Component from '@/shared/lib/component/Component.ts';
import userAvatar from './userAvatar.template.ts';
import { IUserAvatarProps, TUserAvatarChildren } from '../lib/types/avatar.ts';
import s from './userAvatar.module.scss';
import { AvatarEdit } from './components/avatarEdit/AvatarEdit.ts';
import { modalContext } from '../lib/context/modal.ts';
import modalsController from '@/shared/lib/modalsController/ModalsController.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import { createPath } from '@/shared/lib/utils/createPath.ts';

export class UserAvatar extends Component<
  IUserAvatarProps & TDefaultProps,
  TUserAvatarChildren
> {
  constructor(props: IUserAvatarProps) {
    const isModalOpen = Boolean(props?.isModalOpen);

    const componentProps = {
      props: {
        named: props?.named ?? true,
        avatar: createPath(props?.avatar),
        className: s.avatar,
        isModalOpen,
      },
      children: {
        avatarEdit: new AvatarEdit({
          styleName: s.changeAvatar,
          onClick: () => {
            modalsController.openModal(modalContext);
          },
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

const stateConnect = connect((state: State) => ({
  avatar: createPath(state?.user?.avatar),
  name: state?.user?.first_name,
}));

export const UserAvatarComponent = stateConnect(UserAvatar);
