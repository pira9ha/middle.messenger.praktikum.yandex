import { Routes } from '@/shared/constants/routes.ts';

export type TLinkProps = {
  path?: Routes | string;
  title?: string;
  classNames?: string;
  type?: 'text' | 'icon';
  icon?: string;
  target?: string;
  isBackButton?: boolean;
};
