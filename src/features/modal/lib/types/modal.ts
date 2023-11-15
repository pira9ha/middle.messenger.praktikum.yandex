import { TFormProps } from '@/features/form/lib/types/form';
import { Button, IButtonProps } from '@/shared/ui/button';
import { Form } from '@/features/form';
import { Overlay } from '@/shared/ui/overlay';
import { ModalContent } from '@/features/modal/ui/components/modalContent/ModalContent.ts';

export type TModalCreateOrDelete = {
  login: string;
};

export type TModalLoadFile = {
  avatar: File;
};

export type TModalProps = {
  content: TModalContentProps;
  isOpen?: boolean;
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
