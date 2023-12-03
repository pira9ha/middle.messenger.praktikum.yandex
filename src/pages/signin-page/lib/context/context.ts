import s from '../../ui/signinPage.module.scss';
import { TSigninPageProps } from '../types/signinPage.ts';
import { Fields } from '@/shared/lib/validation/constants.ts';

const form: TSigninPageProps['form'] = {
  fields: [
    {
      input: {
        name: 'email',
        type: 'email',
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
      },
      label: {
        labelText: 'Фамилия',
        for: 'second_name',
      },
      field: Fields.NAME,
    },
    {
      input: {
        name: 'phone',
        type: 'tel',
      },
      label: {
        labelText: 'Телефон',
        for: 'phone',
      },
      field: Fields.PHONE,
    },
    {
      input: {
        name: 'password',
        type: 'password',
        autocomplete: 'off',
      },
      label: {
        labelText: 'Пароль',
        for: 'password',
      },
      field: Fields.PASSWORD,
    },
    {
      input: {
        name: 'password_check',
        type: 'password',
        autocomplete: 'off',
      },
      label: {
        labelText: 'Пароль (ещё раз)',
        for: 'password_check',
      },
      field: Fields.PASSWORD_CHECK,
    },
  ],
  buttons: [
    {
      type: 'submit',
      title: 'Зарегистрироваться',
    },
  ],
  classNames: s.signinPage_form,
};

const link: TSigninPageProps['link'] = {
  path: '/',
  title: 'Войти',
  classNames: s.link,
};

export const context = {
  formName: 'Регистрация',
  form,
  link,
};
