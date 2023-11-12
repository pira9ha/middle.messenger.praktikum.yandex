import { IUser } from '@/models/user.ts';
import { Avatar } from '../../ui/components/avatar/Avatar.ts';

export interface IUserAvatarProps {
  avatar?: IUser['avatar'];
  name?: IUser['display_name'];
  altText?: string;
}

export type TUserAvatarChildren = {
  avatar: Avatar;
};

export type TAvatarProps = {
  avatar?: IUser['avatar'];
  name?: IUser['display_name'];
  altText?: string;
};
