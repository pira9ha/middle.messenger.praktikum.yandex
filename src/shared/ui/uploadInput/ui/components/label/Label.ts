import Component from '@/shared/lib/component/Component.ts';
import s from './label.module.scss';
import {
  TUploadLabelChildren,
  TUploadLabelProps,
  TUploadProps,
} from '../../../lib/types/input.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import Handlebars from 'handlebars';
import label from './label.template.ts';
import { Input } from '@/shared/ui/input';

export class Label extends Component<
  TUploadProps & TDefaultProps,
  TUploadLabelChildren
> {
  constructor(props: TUploadLabelProps) {
    const updateFileNameHandler = (fileName: string) => {
      this.setProps({
        labelText: fileName,
      });
    };

    const componentProps = {
      props: {
        ...props,
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

    if (input instanceof Input) {
      const uploadedFiles = (input.element as HTMLInputElement).files?.length;
      this.element?.classList?.add(uploadedFiles ? s.file : s.label);
    }
  }

  render() {
    const template = Handlebars.compile(label);
    return this.compile(template);
  }
}
