import Handlebars from 'handlebars';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import { IProfilePageChildren } from '../lib/types/profile.ts';
import { Form } from '@/features/form';
import { UserAvatar } from '@/features/userAvatar';
import { Link } from '@/shared/ui/link';
import { profileEditPasswordPageContext } from '../lib/context/context.ts';
import { IProfileEditPasswordPageProps } from '../lib/types/profile.ts';
import { TUserChangePassword } from '@/models/user.ts';

export class ProfileEditPasswordPageComponent extends Component {
  constructor(profileProps: IProfileEditPasswordPageProps) {
    const props = {
      ...profileProps,
      className: s.profilePage,
    };

    const children: IProfilePageChildren = {
      userAvatar: new UserAvatar(profileProps.userAvatar),
      link: new Link(profileProps.link),
      reset: new Link(profileProps.reset),
      formPassword: new Form<TUserChangePassword>(
        profileProps.formPasswordContext,
      ),
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

export const ProfileEditPasswordPage = () =>
  new ProfileEditPasswordPageComponent(profileEditPasswordPageContext);
