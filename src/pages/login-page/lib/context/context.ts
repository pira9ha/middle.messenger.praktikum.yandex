import s from '@/pages/login-page/ui/loginPage.module.scss';
import { TLinkProps } from '@/shared/ui/link';
import { IUserLogin } from '@/models/user.ts';
import { TFormProps } from '@/features/form/lib/types/form';

const form: TFormProps<IUserLogin> = {
  fields: {
    login: {
      input: {
        name: 'login',
      },
      label: {
        labelText: 'Логин',
        for: 'login',
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
  },
  buttons: [
    {
      type: 'submit',
      title: 'Войти',
    },
  ],
  className: s.loginPage_form,
};
const link: TLinkProps = {
  path: '/signin',
  title: 'Нет аккаунта?',
  className: s.link,
};

export const context = {
  formName: 'Вход',
  form,
  link,
};
