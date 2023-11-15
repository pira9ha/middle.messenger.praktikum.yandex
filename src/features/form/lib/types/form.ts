import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { Button, IButtonProps } from '@/shared/ui/button';
import { TUploadInputProps, UploadInput } from '@/shared/ui/uploadInput';

export type TFormProps = {
  fields: TInputFieldProps[];
  buttons: IButtonProps[];
  classNames?: string;
  uploadInput?: TUploadInputProps;
};

export type TFormChildren = {
  fields: InputField[];
  buttons: Button[];
  uploadInput?: UploadInput;
};
