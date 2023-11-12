import { Modal } from '@/features/modal';
import { context } from './context.ts';

export type TCreateOrDeleteModalProps = {
  isDelete?: boolean;
};

export const CreateOrDeleteUserModal = (props: TCreateOrDeleteModalProps) => {
  return Modal(context(props));
};
