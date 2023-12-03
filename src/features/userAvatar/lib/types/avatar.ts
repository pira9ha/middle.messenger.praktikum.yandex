import { UserModel } from '@/models/user.ts';
import { Avatar } from '../../ui/components/avatar/Avatar.ts';
import { AvatarEdit } from '@/features/userAvatar/ui/components/avatarEdit/AvatarEdit.ts';
import { Modal } from '@/features/modal';

export interface IUserAvatarProps {
  avatar?: UserModel['avatar'];
  name?: UserModel['display_name'];
  altText?: string;
  isModalOpen?: boolean;
}

export type TUserAvatarChildren = {
  avatar: Avatar;
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
