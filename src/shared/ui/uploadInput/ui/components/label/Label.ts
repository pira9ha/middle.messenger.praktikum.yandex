import Component from '@/shared/lib/component/Component.ts';
import s from './label.module.scss';
import {
  TUploadLabel,
  TUploadLabelChildren,
  TUploadLabelProps,
  TUploadProps,
} from '../../../lib/types/input.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import Handlebars from 'handlebars';
import label from './label.template.ts';
import { Input } from '@/shared/ui/input';

export class Label extends Component<
  TUploadLabel & TDefaultProps,
  TUploadLabelChildren
> {
  constructor(props: TUploadLabelProps) {
    const updateFileNameHandler = (fileName: string) => {
      this.setProps({
        labelText: fileName,
      });
      this.element?.classList?.add(s.file);
    };

    const componentProps = {
      props: {
        name: props.name,
        labelText: props.labelText,
        className: s.label,
        attr: {
          for: props.name,
        },
      },
      children: {
        input: new Input({
          type: props?.type || 'file',
          name: props.name,
          className: s.inputHide,
          events: {
            change: (event: Event) => {
              props.onChange(event, updateFileNameHandler);
            },
          },
        }),
      },
    };

    super('label', componentProps);
  }

  override setProps(
    nextProps:
      | Partial<TUploadProps & TDefaultProps>
      | (TUploadProps & TDefaultProps),
  ) {
    super.setProps(nextProps);
    const { input } = this.children;

    if (nextProps?.value === undefined) {
      if (input instanceof Input) {
        input.setProps({ value: undefined });
        this.element?.classList?.add(s.label);
        return;
      }
    }
  }

  render() {
    const template = Handlebars.compile(label);
    return this.compile(template);
  }
}
