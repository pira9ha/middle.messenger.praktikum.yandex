import Handlebars from 'handlebars';
import modal from './modal.template.ts';
import { IModalProps } from '@/features/modal/lib/types/modal.ts';

export const Modal = (props: IModalProps) => {
  const template = Handlebars.compile(modal);
  return template(props);
};
