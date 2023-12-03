import Handlebars from 'handlebars';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { IProfilePageChildren } from '../lib/types/profile.ts';
import { Form } from '@/features/form';
import { UserAvatar } from '@/features/userAvatar';
import { Link } from '@/shared/ui/link';
import { IProfileEditPasswordPageProps } from '../lib/types/profile.ts';
import { profileEditPasswordPageContext } from '@/pages/profile-page/lib/context/context.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';

export class ProfileEditPasswordPage extends Component<
  IProfileEditPasswordPageProps & TDefaultProps,
  IProfilePageChildren
> {
  constructor() {
    const props = {
      ...profileEditPasswordPageContext,
      className: s.profilePage,
    };

    const children: IProfilePageChildren = {
      userAvatar: new UserAvatar(props.userAvatar),
      link: new Link(props.link),
      reset: new Link(props.reset),
      formPassword: new Form(props.formPasswordContext),
    };

    const componentProps = {
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

const stateConnect = connect((state: State) => ({
  user: state?.user,
}));

export const ProfileEditPassword = stateConnect(ProfileEditPasswordPage);
