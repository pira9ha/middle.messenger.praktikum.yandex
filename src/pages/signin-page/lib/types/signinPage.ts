import { TFormProps } from '@/features/form/lib/types/form.ts';
import { IUserRegistration } from '@/models/user.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { Form } from '@/features/form';

type SignInFormFields = Omit<
  IUserRegistration,
  'id' | 'avatar' | 'display_name'
>;

export type TSigninPageProps = {
  formName: string;
  form: TFormProps<SignInFormFields>;
  link: TLinkProps;
};

export type TSigninPageChildren = {
  form: Form<SignInFormFields>;
  link: Link;
};
