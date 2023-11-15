import Handlebars from 'handlebars';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import { profileEditPageContext } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import {
  IProfileEditPageProps,
  IProfilePageChildren,
} from '../lib/types/profile.ts';
import { Form } from '@/features/form';
import { UserAvatar } from '@/features/userAvatar';
import { Link } from '@/shared/ui/link';

export class ProfileEditPageComponent extends Component<
  IProfileEditPageProps & TDefaultProps,
  IProfilePageChildren
> {
  constructor(profileProps: IProfileEditPageProps) {
    const props = {
      ...profileProps,
      className: s.profilePage,
    };

    const children: IProfilePageChildren = {
      userAvatar: new UserAvatar(profileProps.userAvatar),
      link: new Link(profileProps.link),
      reset: new Link(profileProps.reset),
      formEdit: new Form(profileProps.formEditContext),
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

export const ProfileEditPage = () =>
  new ProfileEditPageComponent(profileEditPageContext);
