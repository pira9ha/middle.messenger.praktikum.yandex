import { TFormProps } from '@/features/form/lib/types/form.ts';
import { IUserLogin } from '@/models/user.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { Form } from '@/features/form';

export type TLoginPageProps = {
  formName: string;
  form: TFormProps<IUserLogin>;
  link: TLinkProps;
};

export type TLoginPageChildren = {
  form: Form<IUserLogin>;
  link: Link;
};
