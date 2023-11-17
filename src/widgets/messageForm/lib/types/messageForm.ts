import { Button, IButtonProps } from '@/shared/ui/button';
import { Dropdown, TDropdown } from '@/shared/ui/dropdown';
import { Textarea } from '../../ui/components/Textarea.ts';

export type TMessageChildrenProps = {
  dropdown: Dropdown;
  sendButton: Button;
  textarea: Textarea;
};

export type TMessageFormProps = {
  dropdownAdd: TDropdown;
  sendButton: IButtonProps;
  input: TTextareaProps;
};

export type TTextareaProps = {
  name: string;
  placeholder?: string;
  value?: string;
};
