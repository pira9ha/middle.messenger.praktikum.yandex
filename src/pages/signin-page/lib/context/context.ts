import s from '../../ui/signinPage.module.scss';
import { TSigninPageProps } from '../types/signinPage.ts';

const form: TSigninPageProps['form'] = {
  fields: {
    email: {
      input: {
        name: 'email',
        type: 'email',
      },
      label: {
        labelText: 'Почта',
        for: 'email',
      },
    },
    login: {
      input: {
        name: 'login',
      },
      label: {
        labelText: 'Логин',
        for: 'login',
      },
    },
    first_name: {
      input: {
        name: 'first_name',
      },
      label: {
        labelText: 'Имя',
        for: 'first_name',
      },
    },
    second_name: {
      input: {
        name: 'second_name',
      },
      label: {
        labelText: 'Фамилия',
        for: 'second_name',
      },
    },
    phone: {
      input: {
        name: 'phone',
        type: 'tel',
      },
      label: {
        labelText: 'Телефон',
        for: 'phone',
      },
    },
    password: {
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
    password_check: {
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
  },
  buttons: [
    {
      type: 'submit',
      title: 'Зарегистрироваться',
    },
  ],
  className: s.signinPage_form,
};

const link: TSigninPageProps['link'] = {
  path: '/login',
  title: 'Войти',
  className: s.link,
};

export const context = {
  formName: 'Регистрация',
  form,
  link,
};
