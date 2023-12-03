import { State } from '@/shared/lib/store/types.ts';
import { UserModel } from '@/models/user.ts';
import { TFormProps } from '@/features/form/lib/types/form.ts';
import { TInputFieldProps } from '@/shared/ui/inputField';

export const mapUserInfo = (state: State) => [
  {
    field: 'Почта',
    value: state?.user?.email,
  },
  {
    field: 'Логин',
    value: state?.user?.login,
  },
  {
    field: 'Имя',
    value: state?.user?.first_name,
  },
  {
    field: 'Фамилия',
    value: state?.user?.second_name,
  },
  {
    field: 'Имя в чате',
    value: state?.user?.display_name,
  },
  {
    field: 'Телефон',
    value: state?.user?.phone,
  },
];

export const mapUserForm = (
  form: TFormProps,
  user: UserModel,
): TInputFieldProps[] => {
  return form.fields.map((formItem) => ({
    ...formItem,
    input: {
      ...formItem.input,
      value: user[formItem.input.name as keyof UserModel],
    },
  })) as TInputFieldProps[];
};
