import Component from '@/shared/lib/component/Component.ts';
import s from './input.module.scss';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import {
  TInputChildren,
  TInputComponentProps,
  TInputProps,
} from '../lib/types/input';

export class Input extends Component<
  TDefaultProps & TInputComponentProps,
  TInputChildren
> {
  constructor(props: TInputProps) {
    const componentProps = {
      props: {
        ...props,
        className: classNames(s.input, [props?.className]),
        attr: {
          type: props?.type || 'text',
          name: props.name,
          placeholder: props?.placeholder,
          autocomplete: props?.autocomplete,
          value: props?.value,
          id: props.name,
          accept: props?.accept,
        },
        event: {
          ...props?.events,
        },
      },
    };

    super('input', componentProps);
  }

  override setProps(nextProps: Partial<TDefaultProps> | TDefaultProps) {
    super.setProps(nextProps);

    if (this.props?.error) {
      this.element?.classList?.add(s.error);
    } else {
      this.element?.classList?.remove(s.error);
    }
  }

  render() {
    return this.compile();
  }
}
