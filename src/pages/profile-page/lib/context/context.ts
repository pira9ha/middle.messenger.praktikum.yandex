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
import { Fields } from '@/shared/lib/validation/constants.ts';
import authService from '@/service/AuthService.ts';

const profileContext: IProfilePageContext['profileContext'] = {
  info: [
    {
      field: 'Почта',
      value: '',
    },
    {
      field: 'Логин',
      value: '',
    },
    {
      field: 'Имя',
      value: '',
    },
    {
      field: 'Фамилия',
      value: '',
    },
    {
      field: 'Имя в чате',
      value: '',
    },
    {
      field: 'Телефон',
      value: '',
    },
  ],
  controls: {
    links: [
      {
        path: '/settings',
        title: 'Изменить данные',
        classNames: s.editLink,
      },
      {
        path: '/edit-password',
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
        value: '',
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
        value: '',
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
        value: '',
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
        value: '',
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
        value: '',
      },
      label: {
        labelText: 'Имя в чате',
        for: 'display_name',
      },
    },
    {
      input: {
        name: 'phone',
        value: '',
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
      onClick: () => {
        authService.logOut();
      },
    },
  ],
  classNames: s.editForm,
};

const reset: IProfilePageContext['reset'] = {
  title: 'Отменить',
  classNames: s.resetLink,
  path: '/profile',
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
  userAvatar: {},
  link: {
    ...link,
    isBackButton: true,
  },
  reset,
  formEditContext,
};

export const profileEditPasswordPageContext: IProfileEditPasswordPageProps = {
  userAvatar: {},
  link: {
    ...link,
    isBackButton: true,
  },
  reset,
  formPasswordContext,
};
