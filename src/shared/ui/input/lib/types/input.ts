import { IInputFields } from '@/models/form';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export type TInputProps = {
  className?: string;
  error?: string;
  events?: TDefaultProps['events'];
  onBlur?: (element: HTMLInputElement) => string | undefined;
} & IInputFields;

export type InputProps = TDefaultProps & IInputFields;
