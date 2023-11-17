import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import {
  IModalContentChildren,
  TModalContentProps,
} from '../../../lib/types/modal.ts';
import modalContent from './modalContent.template.ts';
import s from './modalContent.module.scss';
import { Form } from '@/features/form';
import { Button } from '@/shared/ui/button';

export class ModalContent extends Component<
  TModalContentProps & TDefaultProps,
  IModalContentChildren
> {
  constructor(modalContentProps: TModalContentProps) {
    const props = {
      ...modalContentProps,
      className: s.modalCard,
    };

    const children = {
      form: modalContentProps.formContext
        ? new Form(modalContentProps.formContext)
        : undefined,
      buttons: modalContentProps?.buttons?.map((button) => new Button(button)),
    };

    const componentProps = {
      props,
      children,
    };

    super('div', componentProps);
  }

  render(): DocumentFragment {
    const template = Handlebars.compile(modalContent);
    return this.compile(template);
  }
}
