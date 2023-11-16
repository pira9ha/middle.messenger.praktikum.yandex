import { TFormProps } from '@/features/form/lib/types/form.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { Form } from '@/features/form';

export type TLoginPageProps = {
  formName: string;
  form: TFormProps;
  link: TLinkProps;
};

export type TLoginPageChildren = {
  form: Form;
  link: Link;
};
