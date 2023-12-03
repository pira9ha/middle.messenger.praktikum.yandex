import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { Button, IButtonProps } from '@/shared/ui/button';
import { TUploadProps, UploadInput } from '@/shared/ui/uploadInput';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { FormError } from '../../ui/formError/FormError.ts';

export type TFormProps = {
  fields: TInputFieldProps[];
  buttons: IButtonProps[];
  classNames?: string;
  uploadInput?: TUploadProps;
  file?: string;
  error?: string;
  events?: TDefaultProps['events'];
  submit?: (formData: FormData) => void;
};

export type TFormChildren = {
  fields: InputField[];
  buttons: Button[];
  uploadInput?: UploadInput;
  error: FormError;
};

export type TFormErrorProps = {
  error?: string;
};

export type FormProps = TFormProps & TDefaultProps;
