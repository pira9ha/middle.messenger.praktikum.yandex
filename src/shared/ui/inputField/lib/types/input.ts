import { IInputFields } from '@/models/form.ts';
import { Input } from '../../ui/components/input/Input.ts';
import { Label } from '../../ui/components/label/Label.ts';
import { TProps } from '@/shared/lib/component/componentTypes.ts';

export interface IInputProps extends IInputFields {
  className?: string;
  events?: TProps['events'];
}

export type TInputFieldProps = {
  input: IInputProps;
  label: TLabelProps;
  icon?: string;
  iconStyle?: string;
};

export type TLabelProps = {
  labelText: string;
  for: IInputProps['name'];
};

export interface IInputFieldChildren {
  input: Input;
  label: Label;
}
