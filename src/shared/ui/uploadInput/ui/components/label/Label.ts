import Component from '@/shared/lib/component/Component.ts';
import s from './label.module.scss';
import {
  TUploadLabelChildren,
  TUploadLabelProps,
} from '../../../lib/types/input.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import Handlebars from 'handlebars';
import label from './label.template.ts';
import { Input } from '@/shared/ui/input';

export class Label extends Component<
  TUploadLabelProps & TDefaultProps,
  TUploadLabelChildren
> {
  constructor(props: TUploadLabelProps) {
    const componentProps = {
      props: {
        ...props,
        className: s.label,
        attr: {
          for: props.for,
        },
        events: {
          click: () => {},
        },
      },
      children: {
        input: new Input({
          type: 'file',
          name: props.for,
          className: s.inputHide,
        }),
      },
    };

    super('label', componentProps);
  }

  render() {
    const template = Handlebars.compile(label);
    return this.compile(template);
  }
}
