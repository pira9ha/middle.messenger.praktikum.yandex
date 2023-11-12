import { IAvatarProps } from '@/features/userAvatar/lib/types/avatar.ts';
import { TLinkProps } from '@/shared/ui';
import s from '../../ui/profilePage.module.scss';
import { IUser, TUserChangePassword } from '@/models/user.ts';
import { TFormProps } from '@/features/form/ui/Form.ts';
import {
  PROFILE,
  PROFILE_EDIT,
  PROFILE_PASSWORD_EDIT,
} from '../constants/profile.ts';
import { ButtonVariant, IButtonProps } from '@/shared/ui/button';

type TUserFields = Omit<IUser, 'id' | 'avatar'>;
type TData = {
  field: string;
  value: string;
};

type IProfilePageContext = {
  avatar: IAvatarProps;
  backButton: TLinkProps;
  profileContext?: {
    data: Record<keyof TUserFields, TData>;
    linksContext: Record<string, TLinkProps>;
    buttonsContext: Record<string, IButtonProps>;
  };
  formEditContext?: TFormProps<TUserFields>;
  formPasswordContext?: TFormProps<TUserChangePassword>;
};

const profileContext: IProfilePageContext['profileContext'] = {
  data: {
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
  linksContext: {
    editData: {
      path: PROFILE_EDIT,
      title: 'Изменить данные',
      className: s.editLink,
    },
    editPassword: {
      path: PROFILE_PASSWORD_EDIT,
      title: 'Изменить пароль',
      className: s.editLink,
    },
  },
  buttonsContext: {
    logout: {
      title: 'Выйти',
      variant: ButtonVariant.TEXT_ERROR,
    },
  },
};

const formEditContext: IProfilePageContext['formEditContext'] = {
  fieldsContext: {
    email: {
      labelText: 'Почта',
      name: 'email',
      value: 'saigafarova00@yandex.ru',
    },
    login: {
      labelText: 'Логин',
      name: 'login',
      value: 'pira9ha',
    },
    first_name: {
      labelText: 'Имя',
      name: 'first_name',
      value: 'MyName',
    },
    second_name: {
      labelText: 'Фамилия',
      name: 'second_name',
      value: 'MySecondName',
    },
    display_name: {
      labelText: 'Имя в чате',
      name: 'display_name',
      value: 'My name',
    },
    phone: {
      labelText: 'Телефон',
      name: 'phone',
      value: '+7 (800) 555 35 35',
    },
  },
  buttonContext: {
    save: {
      title: 'Сохранить',
      customClass: s.formButton,
    },
    cancel: {
      title: 'Отменить',
      variant: ButtonVariant.TEXT,
      customClass: s.formButton,
    },
  },
  className: s.editForm,
};

const formPasswordContext: IProfilePageContext['formPasswordContext'] = {
  fieldsContext: {
    oldPassword: {
      labelText: 'Старый пароль',
      name: 'oldPassword',
    },
    newPassword: {
      labelText: 'Новый пароль',
      name: 'newPassword',
    },
    passwordCheck: {
      labelText: 'Повторите новый пароль',
      name: 'password_check',
    },
  },
  buttonContext: {
    save: {
      title: 'Сохранить',
      customClass: s.formButton,
    },
    cancel: {
      title: 'Отменить',
      variant: ButtonVariant.TEXT,
      customClass: s.formButton,
    },
  },
  className: s.editForm,
};

export const context = (): IProfilePageContext => {
  const profilePageState = window.location.pathname;

  return {
    avatar: {
      name: profilePageState !== PROFILE ? undefined : 'My name',
    },
    backButton: {
      type: 'icon',
      path: '/chats',
      className: s.profileLink,
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
