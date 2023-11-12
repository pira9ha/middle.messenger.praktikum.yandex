import Handlebars from 'handlebars';
import { TOption } from '../../../lib/types/dropdown.ts';
import Component from '@/shared/lib/component/Component.ts';
import {
  IComponentProps,
  TProps,
} from '@/shared/lib/component/componentTypes.ts';
import s from './option.module.scss';
import option from './option.template.ts';

export class Option extends Component {
  constructor(props: TOption & TProps) {
    const componentProps: IComponentProps = {
      props: {
        ...props,
        className: s.option,
        events: {
          click: () => {
            props?.onClick?.();
          },
        },
      },
    };
    super('li', componentProps);
  }

  override setProps() {
    super.setProps(this.props);

    if (this.props?.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  render() {
    const template = Handlebars.compile(option);
    return this.compile(template);
  }
}