import { Fields } from '@/shared/lib/validation/constants.ts';
import { TInputFieldProps } from '@/shared/ui/inputField';

export const FORM_FIELDS: TInputFieldProps[] = [
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
];

export const FORM_PASSWORD_FIELDS = [
  {
    input: {
      name: 'oldPassword',
      type: 'password',
    },
    label: {
      labelText: 'Старый пароль',
      for: 'oldPassword',
    },
  },
  {
    input: {
      name: 'newPassword',
      type: 'password',
    },
    label: {
      labelText: 'Новый пароль',
      for: 'newPassword',
    },
    field: Fields.PASSWORD,
  },
  {
    input: {
      name: 'passwordCheck',
      type: 'password',
    },
    label: {
      labelText: 'Повторите новый пароль',
      for: 'passwordCheck',
    },
    field: Fields.PASSWORD_CHECK,
  },
];
