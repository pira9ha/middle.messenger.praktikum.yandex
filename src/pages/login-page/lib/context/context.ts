import s from '@/pages/login-page/ui/loginPage.module.scss';
import { TLinkProps } from '@/shared/ui/link';
import { TFormProps } from '@/features/form/lib/types/form';

const form: TFormProps = {
  fields: [
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
        name: 'password',
        type: 'password',
        autocomplete: 'off',
      },
      label: {
        labelText: 'Пароль',
        for: 'password',
      },
    },
  ],
  buttons: [
    {
      type: 'submit',
      title: 'Войти',
    },
  ],
  classNames: s.loginPage_form,
};
const link: TLinkProps = {
  path: '/signin',
  title: 'Нет аккаунта?',
  classNames: s.link,
};

export const context = {
  formName: 'Вход',
  form,
  link,
};
