import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import s from './input.module.scss';
import { IInputProps } from '../../../lib/types/input.ts';
import { classNames } from '@/shared/lib/utils/classNames.ts';

export class Input extends Component {
  constructor(props: IInputProps) {
    const componentProps: IComponentProps = {
      props: {
        ...props,
        className: classNames(s.input, [props.className]),
        attr: {
          type: props.type || 'text',
          name: props.name,
          placeholder: props.placeholder,
          autocomplete: props.autocomplete,
          value: props.value,
        },
        event: props.events,
      },
    };

    super('input', componentProps);
  }

  render() {
    return this.compile();
  }
}
