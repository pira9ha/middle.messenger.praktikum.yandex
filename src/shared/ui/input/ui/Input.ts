import Component from '@/shared/lib/component/Component.ts';
import s from './input.module.scss';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { TInputProps } from '../lib/types/input';

export class Input extends Component<TDefaultProps> {
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
        },
        event: props?.events,
      },
    };

    super('input', componentProps);
  }

  render() {
    return this.compile();
  }
}
