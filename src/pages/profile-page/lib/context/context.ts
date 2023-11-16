import s from '../../ui/profilePage.module.scss';
import { ButtonVariant } from '@/shared/ui/button';
import {
  IProfileEditPageProps,
  IProfileEditPasswordPageProps,
  IProfilePageContext,
  IProfilePageProps,
} from '../types/profile.ts';
import { arrowLeftIcon } from '@/shared/svg';
import { TLinkProps } from '@/shared/ui/link';
import { Routes } from '@/widgets/router/routes.ts';
import { Fields } from '@/shared/lib/validation/constants.ts';

const profileContext: IProfilePageContext['profileContext'] = {
  info: [
    {
      field: 'Почта',
      value: 'saigafarova00@yandex.ru',
    },
    {
      field: 'Логин',
      value: 'pira9ha',
    },
    {
      field: 'Имя',
      value: 'MyName',
    },
    {
      field: 'Фамилия',
      value: 'MySecondName',
    },
    {
      field: 'Имя в чате',
      value: 'My name',
    },
    {
      field: 'Телефон',
      value: '+7 (800) 555 35 35',
    },
  ],
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
      },
    ],
  },
};

const formEditContext: IProfilePageContext['formEditContext'] = {
  fields: [
    {
      input: {
        name: 'email',
        type: 'email',
        value: 'saigafarova00@yandex.ru',
      },
      label: {
        labelText: 'Почта',
        for: 'email',
      },
      field: Fields.EMAIL,
    },
    {
      input: {
        name: 'login',
        value: 'pira9ha',
      },
      label: {
        labelText: 'Логин',
        for: 'login',
      },
      field: Fields.LOGIN,
    },
    {
      input: {
        name: 'first_name',
        value: 'MyName',
      },
      label: {
        labelText: 'Имя',
        for: 'first_name',
      },
      field: Fields.NAME,
    },
    {
      input: {
        name: 'second_name',
        value: 'MySecondName',
      },
      label: {
        labelText: 'Фамилия',
        for: 'second_name',
      },
      field: Fields.NAME,
    },
    {
      input: {
        name: 'display_name',
        value: 'My name',
      },
      label: {
        labelText: 'Имя в чате',
        for: 'display_name',
      },
    },
    {
      input: {
        name: 'phone',
        value: '+7 (800) 555 35 35',
      },
      label: {
        labelText: 'Телефон',
        for: 'phone',
      },
      field: Fields.PHONE,
    },
  ],
  buttons: [
    {
      title: 'Сохранить',
      customClass: s.formButton,
      type: 'submit',
    },
  ],
  classNames: s.editForm,
};

const formPasswordContext: IProfilePageContext['formPasswordContext'] = {
  fields: [
    {
      input: {
        name: 'old_password',
        type: 'password',
      },
      label: {
        labelText: 'Старый пароль',
        for: 'old_password',
      },
    },
    {
      input: {
        name: 'new_password',
        type: 'password',
      },
      label: {
        labelText: 'Новый пароль',
        for: 'new_password',
      },
      field: Fields.PASSWORD,
    },
    {
      input: {
        name: 'password_check',
        type: 'password',
      },
      label: {
        labelText: 'Повторите новый пароль',
        for: 'password_check',
      },
    },
  ],
  buttons: [
    {
      title: 'Сохранить',
      customClass: s.formButton,
      type: 'submit',
    },
  ],
  classNames: s.editForm,
};

const reset: IProfilePageContext['reset'] = {
  title: 'Отменить',
  classNames: s.resetLink,
  path: Routes.PROFILE,
};

const link: TLinkProps = {
  type: 'icon',
  classNames: s.profileLink,
  icon: arrowLeftIcon,
};

export const profileInfoPageContext: IProfilePageProps = {
  userAvatar: {
    name: 'My name',
  },
  link: {
    ...link,
    path: '/chats',
  },
  profileContext,
};

export const profileEditPageContext: IProfileEditPageProps = {
  userAvatar: {
    avatar: '../src/assets/img/default_avatar.png',
  },
  link: {
    ...link,
    isBackButton: true,
  },
  reset,
  formEditContext,
};

export const profileEditPasswordPageContext: IProfileEditPasswordPageProps = {
  userAvatar: {
    avatar: '../src/assets/img/default_avatar.png',
  },
  link: {
    ...link,
    isBackButton: true,
  },
  reset,
  formPasswordContext,
};
