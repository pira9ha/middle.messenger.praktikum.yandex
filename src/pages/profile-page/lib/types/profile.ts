import { IUser } from '@/models/user';
import { Controls } from '@/pages/profile-page/ui/components/controls/Controls.ts';
import { ProfileInfoField } from '../../ui/components/profileInfoField/ProfileInfoField.ts';
import { TControlsProps } from './controls.ts';
import { IUserAvatarProps } from '@/features/userAvatar/lib/types/avatar.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { TFormProps } from '@/features/form/lib/types/form.ts';
import { UserAvatar } from '@/features/userAvatar';
import { ProfileInfo } from '@/pages/profile-page/ui/components/profileInfo/ProfileInfo.ts';
import { Form } from '@/features/form';

type TData = {
  field: string;
  value: string;
};

export type TProfileInfoProps = {
  info: TData[];
  controls: TControlsProps;
};

export type TProfileInfoChildren = {
  controls: Controls;
  info: ProfileInfoField[];
};

export type TProfileInfoField = TData;

export type IProfileContext = {
  userAvatar: IUserAvatarProps;
  link: TLinkProps;
};

export type IProfilePageContext = {
  reset?: TLinkProps;
  profileContext?: TProfileInfoProps;
  formEditContext?: TFormProps;
  formPasswordContext?: TFormProps;
} & IProfileContext;

export type IProfilePageProps = {
  profileContext: TProfileInfoProps;
} & IProfileContext;

export type IProfileEditPageProps = {
  reset: TLinkProps;
  formEditContext: TFormProps;
} & IProfileContext;

export type IProfileEditPasswordPageProps = {
  reset: TLinkProps;
  formPasswordContext: TFormProps;
} & IProfileContext;

export type IProfilePageChildren = {
  userAvatar: UserAvatar;
  link: Link;
  reset?: Link;
  profileInfo?: ProfileInfo;
  formEdit?: Form;
  formPassword?: Form;
};
