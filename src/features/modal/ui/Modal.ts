import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { IModalChildren, TModalProps } from '../lib/types/modal.ts';
import modal from './modal.template.ts';
import s from './modal.module.scss';
import { Overlay } from '@/shared/ui/overlay';
import { ModalContent } from './components/modalContent/ModalContent.ts';

export class Modal extends Component<
  TModalProps & TDefaultProps,
  IModalChildren
> {
  constructor(modalProps: TModalProps) {
    const props: TModalProps & TDefaultProps = {
      ...modalProps,
      className: s.modalWrapper,
    };

    const children: IModalChildren = {
      content: new ModalContent(modalProps.content),
      overlay: new Overlay({
        onClick: (event: MouseEvent | Event) => {
          const target = event.target;
          const modalCard = this.children.content;

          if (!modalCard || !(modalCard instanceof ModalContent)) {
            return;
          }

          if (
            target instanceof Element &&
            !target.contains(modalCard.getContent())
          ) {
            modalProps?.handleClose?.();
          }
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

  override setProps(props: Partial<TModalProps & TDefaultProps>) {
    super.setProps(props);

    if (this.props?.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  render(): DocumentFragment {
    const template = Handlebars.compile(modal);
    return this.compile(template);
  }
}
