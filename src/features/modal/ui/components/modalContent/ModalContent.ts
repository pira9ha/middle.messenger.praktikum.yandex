import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import {
  IModalContentChildren,
  TModalContentProps,
} from '../../../lib/types/modal.ts';
import modalContent from './modalContent.template.ts';
import s from './modalContent.module.scss';
import { Form } from '@/features/form';
import { Button } from '@/shared/ui/button';

export class ModalContent extends Component {
  constructor(props: TModalContentProps) {
    const componentProps: IComponentProps<IModalContentChildren> = {
      props: {
        ...props,
        className: s.modalCard,
      },
      children: {
        form: props.formContext ? new Form(props.formContext) : undefined,
        buttons: props?.buttons?.map((button) => new Button(button)),
      },
    };

    super('div', componentProps);
  }

  render(): DocumentFragment {
    const template = Handlebars.compile(modalContent);
    return this.compile(template);
  }
}
