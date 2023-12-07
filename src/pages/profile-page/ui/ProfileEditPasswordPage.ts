import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import { arrowLeftIcon } from '@/shared/svg';
import { FORM_PASSWORD_FIELDS } from '../lib/context/formMock.ts';
import authService from '@/service/AuthService.ts';
import { UserAvatarComponent } from '@/features/userAvatar';

import { profileAvatarContext } from '../lib/context/profileContext.ts';
import { updatePassword } from '../lib/api/updatePassword.ts';

import {
  IProfileEditPasswordPageProps,
  IProfilePageChildren,
} from '../lib/types/profile.ts';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui/link';
import { Routes } from '@/shared/constants/routes.ts';

export class ProfileEditPasswordPage extends Component<
  IProfileEditPasswordPageProps,
  IProfilePageChildren
> {
  constructor() {
    authService.user();
    const userAvatar = profileAvatarContext();

    const props: IProfileEditPasswordPageProps = {
      formPasswordContext: true,
      className: s.profilePage,
    };

    const children: IProfilePageChildren = {
      userAvatar: new UserAvatarComponent(userAvatar),
      link: new Link({
        type: 'icon',
        classNames: s.profileLink,
        icon: arrowLeftIcon,
        isBackButton: true,
      }),
      reset: new Link({
        title: 'Отменить',
        classNames: s.resetLink,
        path: Routes.PROFILE,
      }),
      formPassword: new Form({
        fields: FORM_PASSWORD_FIELDS,
        buttons: [
          {
            title: 'Сохранить',
            customClass: s.formButton,
            type: 'submit',
          },
        ],
        submit: updatePassword,
        classNames: s.editForm,
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
