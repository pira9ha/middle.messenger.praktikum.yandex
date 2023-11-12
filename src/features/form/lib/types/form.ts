import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { Button, IButtonProps } from '@/shared/ui/button';

export type TFormProps<T> = {
  buttonContext: Record<string, IButtonProps>;
  fieldsContext: Record<keyof T, TInputFieldProps>;
  className?: string;
};

export type TFormChildren = {
  fields: InputField[];
  buttons: Button[];
};
