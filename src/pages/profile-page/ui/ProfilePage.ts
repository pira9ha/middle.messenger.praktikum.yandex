import Handlebars from 'handlebars';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import Component from '@/shared/lib/component/Component.ts';
import {
  IProfilePageChildren,
  IProfilePageProps,
} from '../lib/types/profile.ts';
import { ProfileInfoComponent } from './components/profileInfo/ProfileInfo.ts';
import { UserAvatarComponent } from '@/features/userAvatar';
import { Link } from '@/shared/ui/link';
import authService from '@/service/AuthService.ts';
import {
  createProfileContext,
  profileAvatarContext,
} from '../lib/context/profileContext.ts';
import { ButtonVariant } from '@/shared/ui/button';
import { arrowLeftIcon } from '@/shared/svg';
import { Routes } from '@/shared/constants/routes.ts';
import { logout } from '@/pages/profile-page/lib/api/logout.ts';

export class ProfilePage extends Component<
  IProfilePageProps,
  IProfilePageChildren
> {
  constructor() {
    authService.user();

    const { info } = createProfileContext();
    const userAvatar = profileAvatarContext(true);

    const props = {
      profileContext: true,
      className: s.profilePage,
    };

    const children: IProfilePageChildren = {
      userAvatar: new UserAvatarComponent(userAvatar),
      link: new Link({
        type: 'icon',
        classNames: s.profileLink,
        icon: arrowLeftIcon,
        path: Routes.CHATS,
      }),
      profileInfo: new ProfileInfoComponent({
        info,
        controls: {
          links: [
            {
              path: Routes.PROFILE_EDIT,
              title: 'Изменить данные',
              classNames: s.editLink,
            },
            {
              path: Routes.PROFILE_PASSWORD_EDIT,
              title: 'Изменить пароль',
              classNames: s.editLink,
            },
          ],
          buttons: [
            {
              title: 'Выйти',
              variant: ButtonVariant.TEXT_ERROR,
              onClick: logout,
            },
          ],
        },
      }),
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
