import { IButtonFields } from '@/models/form.ts';

export enum ButtonVariant {
  TEXT = 'text',
  DEFAULT = 'default',
  ERROR = 'error',
  TEXT_ERROR = 'textError',
  ICON = 'icon',
}

export type IButtonProps = {
  variant?: ButtonVariant;
  customClass?: string;
  iconImage?: string;
  width?: number;
  height?: number;
} & IButtonFields;
