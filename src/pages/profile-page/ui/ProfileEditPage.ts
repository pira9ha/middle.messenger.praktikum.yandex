import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import s from './profilePage.module.scss';

import profile from './profilePage.template';
import store from '@/shared/lib/store/Store.ts';
import authService from '@/service/AuthService.ts';
import { arrowLeftIcon } from '@/shared/svg';
import { FORM_FIELDS } from '../lib/context/formMock.ts';

import {
  IProfileEditPageChildren,
  IProfileEditPageProps,
} from '../lib/types/profile.ts';
import { Form } from '@/features/form';
import { UserAvatarComponent } from '@/features/userAvatar';
import { Link } from '@/shared/ui/link';
import { mapUserForm } from '@/pages/profile-page/lib/utils/mapUser.ts';
import { Routes } from '@/shared/constants/routes.ts';
import {
  createProfileEditContext,
  profileAvatarContext,
} from '../lib/context/profileContext.ts';
import { updateForm } from '../lib/api/updateForm.ts';

export class ProfileEditPage extends Component<
  IProfileEditPageProps,
  IProfileEditPageChildren
> {
  constructor() {
    authService.user();

    const { fields } = createProfileEditContext();
    const userAvatar = profileAvatarContext();

    const props: IProfileEditPageProps = {
      user: undefined,
      formEditContext: true,
      className: s.profilePage,
    };

    const children: IProfileEditPageChildren = {
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
      formEdit: new Form({
        fields,
        buttons: [
          {
            title: 'Сохранить',
            customClass: s.formButton,
            type: 'submit',
          },
        ],
        submit: updateForm,
        classNames: s.editForm,
      }),
    };

    const componentProps = {
      props,
      children,
    };

    super('div', componentProps);
  }

  setProps(nextProps: Partial<IProfileEditPageProps>) {
    if (nextProps?.user) {
      const formEditContext = this._updateFormProps();
      const form = this.children.formEdit as Form;
      form.updateFields(formEditContext!);
    }

    super.setProps(nextProps);
  }

  _updateFormProps() {
    const storeUser = store.getState();

    if (storeUser?.user) {
      return mapUserForm(FORM_FIELDS, storeUser?.user);
    }
  }

  render() {
    const template = Handlebars.compile(profile);
    return this.compile(template);
  }
}
