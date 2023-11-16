import { TFormProps } from '@/features/form/lib/types/form';
import { Button, IButtonProps } from '@/shared/ui/button';
import { Form } from '@/features/form';
import { Overlay } from '@/shared/ui/overlay';
import { ModalContent } from '../../ui/components/modalContent/ModalContent.ts';

export type TModalProps = {
  content: TModalContentProps;
  handleClose?: (event?: Event) => void;
};

export type TModalContentProps = {
  title: string;
  formContext?: TFormProps;
  buttons?: IButtonProps[];
};

export type IModalContentChildren = {
  form?: Form;
  buttons?: Button[];
};

export type IModalChildren = {
  content: ModalContent;
  overlay: Overlay;
};
