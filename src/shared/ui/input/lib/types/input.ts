import { IInputFields } from '@/models/form';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { Error } from '@/shared/ui/error/ui/Error.ts';

export type TInputProps = {
  className?: string;
  error?: string;
  events?: TDefaultProps['events'];
  onBlur?: (element: HTMLInputElement) => string | undefined;
} & IInputFields;

export type TInputComponentProps = {
  error?: string;
};

export type TInputChildren = {
  error?: Error;
};
