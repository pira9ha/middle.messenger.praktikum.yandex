import { UserModel } from '@/models/user.ts';
import { AvatarEdit } from '../../ui/components/avatarEdit/AvatarEdit.ts';
import { Modal } from '@/features/modal';

export interface IUserAvatarProps {
  avatar?: UserModel['avatar'];
  name?: UserModel['display_name'];
  altText?: string;
  named?: boolean;
  isModalOpen?: boolean;
}

export type TUserAvatarChildren = {
  avatarEdit: AvatarEdit;
  modal?: Modal;
};

export type TAvatarProps = {
  avatar?: UserModel['avatar'];
  name?: UserModel['display_name'];
  altText?: string;
};

export type TAvatarEditProps = {
  styleName: string;
  onClick(): void;
};
