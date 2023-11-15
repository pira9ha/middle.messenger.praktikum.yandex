import Handlebars from 'handlebars';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import { profileInfoPageContext } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import {
  IProfilePageChildren,
  IProfilePageProps,
} from '../lib/types/profile.ts';
import { ProfileInfo } from './components/profileInfo/ProfileInfo.ts';
import { UserAvatar } from '@/features/userAvatar';
import { Link } from '@/shared/ui/link';

export class ProfilePageComponent extends Component<
  IProfilePageProps & TDefaultProps,
  IProfilePageChildren
> {
  constructor(profileProps: IProfilePageProps) {
    const props = {
      ...profileProps,
      className: s.profilePage,
    };

    const children: IProfilePageChildren = {
      userAvatar: new UserAvatar(profileProps.userAvatar),
      link: new Link(profileProps.link),
      profileInfo: new ProfileInfo(profileProps.profileContext),
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

export const ProfilePage = () =>
  new ProfilePageComponent(profileInfoPageContext);
