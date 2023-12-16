import { Button } from '@/shared/ui/button';
import { Dropdown } from '@/shared/ui/dropdown';
import { Textarea } from '../../ui/components/Textarea.ts';

export type TMessageChildrenProps = {
  dropdown: Dropdown;
  sendButton: Button;
  textarea: Textarea;
};

export type TTextareaProps = {
  name: string;
  placeholder?: string;
  value?: string;
};
