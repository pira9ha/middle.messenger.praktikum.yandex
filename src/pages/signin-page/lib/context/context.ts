import s from '../../ui/signinPage.module.scss';
import { TSigninPageProps } from '../types/signinPage.ts';

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
    },
    {
      input: {
        name: 'login',
      },
      label: {
        labelText: 'Логин',
        for: 'login',
      },
    },
    {
      input: {
        name: 'first_name',
      },
      label: {
        labelText: 'Имя',
        for: 'first_name',
      },
    },
    {
      input: {
        name: 'second_name',
      },
      label: {
        labelText: 'Фамилия',
        for: 'second_name',
      },
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
  path: '/login',
  title: 'Войти',
  classNames: s.link,
};

export const context = {
  formName: 'Регистрация',
  form,
  link,
};
