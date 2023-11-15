import { Label } from '../../ui/components/label/Label.ts';
import { Input } from '@/shared/ui/input';

export type TUploadInputProps = {
  name: string;
  labelText: string;
};

export type TUploadLabelProps = {
  labelText: string;
  for: TUploadInputProps['name'];
};

export type TUploadInputChildren = {
  label: Label;
};

export type TUploadLabelChildren = {
  input: Input;
};
