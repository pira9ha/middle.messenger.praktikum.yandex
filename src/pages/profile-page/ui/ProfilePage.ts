import Handlebars from 'handlebars';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import { context } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import {
  IProfilePageChildren,
  IProfilePageProps,
  TUserFields,
} from '../lib/types/profile.ts';
import { ProfileInfo } from './components/profileInfo/ProfileInfo.ts';
import { Form } from '@/features/form';
import { TUserChangePassword } from '@/models/user.ts';
import { UserAvatar } from '@/features/userAvatar';
import { Link } from '@/shared/ui';

export class ProfilePageComponent extends Component {
  constructor(profileProps: IProfilePageProps) {
    const props = {
      ...profileProps,
      className: s.profilePage,
    };

    const children: IProfilePageChildren = {
      userAvatar: new UserAvatar(profileProps.userAvatar),
      link: new Link(profileProps.link),
      profileInfo: profileProps.profileContext
        ? new ProfileInfo(profileProps.profileContext)
        : undefined,
      formEdit: profileProps.formEditContext
        ? new Form<TUserFields>(profileProps.formEditContext)
        : undefined,
      formPassword: profileProps.formPasswordContext
        ? new Form<TUserChangePassword>(profileProps.formPasswordContext)
        : undefined,
    };

    const componentProps: IComponentProps<IProfilePageChildren> = {
      props,
      children,
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(profile);
    return this.compile(template);
  }
}
export const ProfilePage = () => new ProfilePageComponent(context());
