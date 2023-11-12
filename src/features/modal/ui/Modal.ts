import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import {
  IComponentProps,
  TProps,
} from '@/shared/lib/component/componentTypes.ts';
import { IModalChildren, TModalProps } from '../lib/types/modal.ts';
import modal from './modal.template.ts';
import s from './modal.module.scss';
import { Overlay } from '@/shared/ui/overlay';
import { ModalContent } from './components/modalContent/ModalContent.ts';

export class Modal extends Component {
  constructor(modalProps: TModalProps) {
    const props: TModalProps & TProps = {
      ...modalProps,
      className: s.modalWrapper,
    };

    const children: IModalChildren = {
      content: new ModalContent(modalProps.content),
      overlay: new Overlay({
        onClick() {
          modalProps.handleClose();
        },
        className: s.overlay,
      }),
    };

    const componentProps: IComponentProps<IModalChildren> = {
      props,
      children,
    };
    super('div', componentProps);
  }

  render(): DocumentFragment {
    const template = Handlebars.compile(modal);
    return this.compile(template);
  }
}
