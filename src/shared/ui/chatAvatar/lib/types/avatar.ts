import { UserModel } from '@/models/user.ts';

export type TAvatarProps = {
  avatar?: UserModel['avatar'];
  alt?: string;
};
