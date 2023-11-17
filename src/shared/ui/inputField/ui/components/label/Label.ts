import Component from '@/shared/lib/component/Component.ts';
import s from './label.module.scss';
import { TLabelProps } from '../../../lib/types/input.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export class Label extends Component<TLabelProps & TDefaultProps> {
  constructor(props: TLabelProps) {
    const componentProps = {
      props: {
        ...props,
        className: s.label,
        attr: {
          for: props.for,
        },
      },
    };

    super('label', componentProps);
  }

  render() {
    return this.compile(() =>
      this.props?.labelText ? this.props.labelText.toString() : '',
    );
  }
}
