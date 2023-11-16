import { Label } from '../../ui/components/label/Label.ts';
import { Input, TInputProps } from '@/shared/ui/input';

export type TUploadProps = {
  name: string;
  labelText: string;
  type?: TInputProps['type'];
  accept?: TInputProps['accept'];
};

export type TUploadLabelProps = {
  name: string;
  labelText: string;
  type?: TInputProps['type'];
  accept?: TInputProps['accept'];
  onChange: (event: Event, cb: (param: string) => void) => void;
};

export type TUploadInputChildren = {
  label: Label;
};

export type TUploadLabelChildren = {
  input: Input;
};
