import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { IModalChildren, TModalProps } from '../lib/types/modal.ts';
import modal from './modal.template.ts';
import s from './modal.module.scss';
import { Overlay } from '@/shared/ui/overlay';
import { ModalContent } from './components/modalContent/ModalContent.ts';
import modalsController from '@/shared/lib/ModalsController/ModalsController.ts';

export class Modal extends Component<TDefaultProps, IModalChildren> {
  constructor(modalProps: TModalProps) {
    const props: TDefaultProps = {
      attr: {
        class: s.modalWrapper,
      },
    };

    const children: IModalChildren = {
      content: new ModalContent(modalProps.content),
      overlay: new Overlay({
        onClick: () => {
          modalsController.closeModal();
        },
        className: s.overlay,
      }),
    };

    const componentProps = {
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
