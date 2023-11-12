import { IUser, TUserChangePassword } from '@/models/user';
import { Controls } from '@/pages/profile-page/ui/components/controls/Controls.ts';
import { ProfileInfoField } from '../../ui/components/profileInfoField/ProfileInfoField.ts';
import { TControlsProps } from './controls.ts';
import { IUserAvatarProps } from '@/features/userAvatar/lib/types/avatar.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { TFormProps } from '@/features/form/lib/types/form.ts';
import { UserAvatar } from '@/features/userAvatar';
import { ProfileInfo } from '@/pages/profile-page/ui/components/profileInfo/ProfileInfo.ts';
import { Form } from '@/features/form';

export type TUserFields = Omit<IUser, 'id' | 'avatar'>;
type TData = {
  field: string;
  value: string;
};

export type TProfileInfoProps = {
  info: Record<keyof TUserFields, TData>;
  controls: TControlsProps;
};

export type TProfileInfoChildren = {
  controls: Controls;
  info: ProfileInfoField[];
};

export type TProfileInfoField = TData;

export type IProfilePageProps = {
  userAvatar: IUserAvatarProps;
  link: TLinkProps;
  profileContext?: TProfileInfoProps;
  formEditContext?: TFormProps<TUserFields>;
  formPasswordContext?: TFormProps<TUserChangePassword>;
};

export type IProfilePageChildren = {
  userAvatar: UserAvatar;
  link: Link;
  profileInfo?: ProfileInfo;
  formEdit?: Form<TUserFields>;
  formPassword?: Form<TUserChangePassword>;
};
