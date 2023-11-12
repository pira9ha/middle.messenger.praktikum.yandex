import s from '../../ui/profilePage.module.scss';
import {
  PROFILE,
  PROFILE_EDIT,
  PROFILE_PASSWORD_EDIT,
} from '../constants/profile.ts';
import { ButtonVariant } from '@/shared/ui/button';
import { IProfilePageProps } from '../types/profile.ts';
import { arrowLeftIcon } from '@/shared/svg';

const profileContext: IProfilePageProps['profileContext'] = {
  info: {
    email: {
      field: 'Почта',
      value: 'saigafarova00@yandex.ru',
    },
    login: {
      field: 'Логин',
      value: 'pira9ha',
    },
    first_name: {
      field: 'Имя',
      value: 'MyName',
    },
    second_name: {
      field: 'Фамилия',
      value: 'MySecondName',
    },
    display_name: {
      field: 'Имя в чате',
      value: 'My name',
    },
    phone: {
      field: 'Телефон',
      value: '+7 (800) 555 35 35',
    },
  },
  controls: {
    links: [
      {
        path: PROFILE_EDIT,
        title: 'Изменить данные',
        className: s.editLink,
      },
      {
        path: PROFILE_PASSWORD_EDIT,
        title: 'Изменить пароль',
        className: s.editLink,
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

const formEditContext: IProfilePageProps['formEditContext'] = {
  fields: {
    email: {
      input: {
        name: 'email',
        type: 'email',
        value: 'saigafarova00@yandex.ru',
      },
      label: {
        labelText: 'Почта',
        for: 'email',
      },
    },
    login: {
      input: {
        name: 'login',
        value: 'pira9ha',
      },
      label: {
        labelText: 'Логин',
        for: 'login',
      },
    },
    first_name: {
      input: {
        name: 'first_name',
        value: 'MyName',
      },
      label: {
        labelText: 'Имя',
        for: 'first_name',
      },
    },
    second_name: {
      input: {
        name: 'second_name',
        value: 'MySecondName',
      },
      label: {
        labelText: 'Фамилия',
        for: 'second_name',
      },
    },
    display_name: {
      input: {
        name: 'display_name',
        value: 'My name',
      },
      label: {
        labelText: 'Имя в чате',
        for: 'display_name',
      },
    },
    phone: {
      input: {
        name: 'phone',
        value: '+7 (800) 555 35 35',
      },
      label: {
        labelText: 'Телефон',
        for: 'phone',
      },
    },
  },
  buttons: [
    {
      title: 'Сохранить',
      customClass: s.formButton,
    },
    {
      title: 'Отменить',
      variant: ButtonVariant.TEXT,
      customClass: s.formButton,
    },
  ],
  className: s.editForm,
};

const formPasswordContext: IProfilePageProps['formPasswordContext'] = {
  fields: {
    oldPassword: {
      input: {
        name: 'old_password',
        type: 'password',
      },
      label: {
        labelText: 'Старый пароль',
        for: 'old_password',
      },
    },
    newPassword: {
      input: {
        name: 'new_password',
        type: 'password',
      },
      label: {
        labelText: 'Новый пароль',
        for: 'new_password',
      },
    },
    passwordCheck: {
      input: {
        name: 'password_check',
        type: 'password',
      },
      label: {
        labelText: 'Повторите новый пароль',
        for: 'password_check',
      },
    },
  },
  buttons: [
    {
      title: 'Сохранить',
      customClass: s.formButton,
    },
    {
      title: 'Отменить',
      variant: ButtonVariant.TEXT,
      customClass: s.formButton,
    },
  ],
  className: s.editForm,
};

export const context = (): IProfilePageProps => {
  const profilePageState = window.location.pathname;

  return {
    userAvatar: {
      name: profilePageState !== PROFILE ? undefined : 'My name',
    },
    link: {
      type: 'icon',
      path: '',
      className: s.profileLink,
      icon: arrowLeftIcon,
      isBackButton: true,
    },
    profileContext: profilePageState === PROFILE ? profileContext : undefined,
    formEditContext:
      profilePageState === PROFILE_EDIT ? formEditContext : undefined,
    formPasswordContext:
      profilePageState === PROFILE_PASSWORD_EDIT
        ? formPasswordContext
        : undefined,
  };
};
