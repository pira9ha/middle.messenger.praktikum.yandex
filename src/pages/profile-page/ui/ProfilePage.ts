import Handlebars from 'handlebars';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import { profileInfoPageContext } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { IProfilePageChildren } from '../lib/types/profile.ts';
import { ProfileInfoComponent } from './components/profileInfo/ProfileInfo.ts';
import { UserAvatar } from '@/features/userAvatar';
import { Link } from '@/shared/ui/link';

export class ProfilePage extends Component<
  TDefaultProps,
  IProfilePageChildren
> {
  constructor() {
    const props = {
      ...profileInfoPageContext,
      className: s.profilePage,
    };

    const children: IProfilePageChildren = {
      userAvatar: new UserAvatar(props.userAvatar),
      link: new Link(props.link),
      profileInfo: new ProfileInfoComponent(props.profileContext),
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
