import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { Button, IButtonProps } from '@/shared/ui/button';
import { TUploadProps, UploadInput } from '@/shared/ui/uploadInput';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export type TFormProps = {
  fields: TInputFieldProps[];
  buttons: IButtonProps[];
  classNames?: string;
  uploadInput?: TUploadProps;
  file?: string;
  events?: TDefaultProps['events'];
};

export type TFormChildren = {
  fields: InputField[];
  buttons: Button[];
  uploadInput?: UploadInput;
};
