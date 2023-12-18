import { State } from '@/shared/lib/store/types.ts';
import { UserModel } from '@/models/user.ts';
import { TFormProps } from '@/features/form/lib/types/form.ts';
import { TInputFieldProps } from '@/shared/ui/inputField';

export const mapUserInfo = (state: State) => {
  return [
    {
      field: 'Почта',
      value: state?.user?.email ?? '',
    },
    {
      field: 'Логин',
      value: state?.user?.login ?? '',
    },
    {
      field: 'Имя',
      value: state?.user?.first_name ?? '',
    },
    {
      field: 'Фамилия',
      value: state?.user?.second_name ?? '',
    },
    {
      field: 'Имя в чате',
      value: state?.user?.display_name ?? '',
    },
    {
      field: 'Телефон',
      value: state?.user?.phone ?? '',
    },
  ];
};

export const mapUserForm = (
  fields: TFormProps['fields'],
  user: UserModel,
): TInputFieldProps[] => {
  return fields.map((formItem) => ({
    ...formItem,
    input: {
      ...formItem.input,
      value: user[formItem.input.name as keyof UserModel],
    },
  })) as TInputFieldProps[];
};
