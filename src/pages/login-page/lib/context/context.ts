import s from '../../ui/loginPage.module.scss';
import { TLinkProps } from '@/shared/ui/link';
import { TFormProps } from '@/features/form/lib/types/form';
import { Fields } from '@/shared/lib/validation/constants.ts';

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
      field: Fields.LOGIN,
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
