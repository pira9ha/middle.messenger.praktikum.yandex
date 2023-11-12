import { TFormProps } from '@/features/form/lib/types/form';
import { IButtonProps } from '@/shared/ui/button';

export type TModalCreateOrDelete = {
  login: string;
};

export type TModalLoadFile = {
  avatar: File;
};

export interface IModalProps {
  title: string;
  formContext?: TFormProps<TModalLoadFile | TModalCreateOrDelete>;
  buttonContext?: Record<string, IButtonProps>;
}
