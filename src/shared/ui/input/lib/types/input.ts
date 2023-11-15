import { IInputFields } from '@/models/form';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export type TInputProps = {
  className?: string;
  events?: TDefaultProps['events'];
} & IInputFields;
