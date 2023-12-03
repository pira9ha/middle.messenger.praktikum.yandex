import { InputProps, TInputProps } from '../types/input.ts';

export const mapAttr = (props: InputProps | TInputProps) => ({
  type: props?.type || 'text',
  name: props.name,
  placeholder: props?.placeholder,
  autocomplete: props?.autocomplete,
  value: props?.value,
  id: props.name,
  accept: props?.accept,
});
