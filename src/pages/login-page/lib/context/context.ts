import { TFormProps } from '@/features/form/ui/Form.ts';
import s from '@/pages/login-page/ui/loginPage.module.scss';
import { TLinkProps } from '@/shared/ui/link/ui/Link.ts';
import { IUserLogin } from '@/models/user.ts';

const formContext: TFormProps<IUserLogin> = {
  fieldsContext: {
    login: {
      name: 'login',
      labelText: 'Логин',
    },
    password: {
      name: 'password',
      labelText: 'Пароль',
      type: 'password',
      autocomplete: 'off',
    },
  },
  buttonContext: {
    login: {
      type: 'submit',
      title: 'Войти',
    },
  },
  className: s.loginPage_form,
};
const linkContext: TLinkProps = {
  path: '/signin',
  title: 'Нет аккаунта?',
  className: s.link,
};

export const context = {
  formName: 'Вход',
  formContext,
  linkContext,
};
