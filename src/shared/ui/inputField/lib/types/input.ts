import { Input } from '@/shared/ui/input/ui/Input.ts';
import { Label } from '../../ui/components/label/Label.ts';
import { TInputProps } from '@/shared/ui/input';
import { Error } from '@/shared/ui/error';
import { Fields } from '@/shared/lib/validation/constants.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export type TInputFieldProps = {
  input: TInputProps;
  label: TLabelProps;
  icon?: string;
  iconStyle?: string;
  errorMessage?: string;
  field?: Fields;
  validate?: (element: HTMLInputElement) => string | undefined;
} & TDefaultProps;

export type TLabelProps = {
  labelText: string;
  for: TInputProps['name'];
};

export type TInputFieldChildren = {
  input: Input;
  label: Label;
  error?: Error;
};
