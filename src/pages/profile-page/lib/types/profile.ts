import { Controls } from '@/pages/profile-page/ui/components/controls/Controls.ts';
import { TControlsProps } from './controls.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { TFormProps } from '@/features/form/lib/types/form.ts';
import { UserAvatar } from '@/features/userAvatar';
import { ProfileInfo } from '@/pages/profile-page/ui/components/profileInfo/ProfileInfo.ts';
import { Form } from '@/features/form';
import { UserModel } from '@/models/user.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

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
};

export type IProfilePageContext = {
  reset?: TLinkProps;
  profileContext?: TProfileInfoProps;
  formEditContext?: TFormProps;
  formPasswordContext?: TFormProps;
} & TDefaultProps;

export type IProfilePageProps = {
  profileContext: boolean;
} & TDefaultProps;

export type IProfileEditPageProps = {
  user?: UserModel;
  formEditContext: boolean;
} & TDefaultProps;

export type IProfileEditPasswordPageProps = {
  formPasswordContext: boolean;
} & TDefaultProps;

export type IProfilePageChildren = {
  userAvatar: UserAvatar;
  link: Link;
  reset?: Link;
  profileInfo?: ProfileInfo;
  formEdit?: Form;
  formPassword?: Form;
};

export type IProfileEditPageChildren = {
  userAvatar: UserAvatar;
  link: Link;
  reset?: Link;
  formEdit: Form;
};
