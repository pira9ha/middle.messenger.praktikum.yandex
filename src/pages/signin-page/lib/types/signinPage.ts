import { TFormProps } from '@/features/form/lib/types/form.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { Form } from '@/features/form';

export type TSigninPage = {
  formName: TSigninPageProps['formName'];
};

export type TSigninPageProps = {
  formName: string;
  form: TFormProps;
  link: TLinkProps;
};

export type TSigninPageChildren = {
  form: Form;
  link: Link;
};
