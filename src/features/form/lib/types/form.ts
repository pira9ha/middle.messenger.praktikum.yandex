import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { Button, IButtonProps } from '@/shared/ui/button';

export type TFormProps<T> = {
  fields: Record<keyof T, TInputFieldProps>;
  buttons: IButtonProps[];
  className?: string;
};

export type TFormChildren = {
  fields: InputField[];
  buttons: Button[];
};
