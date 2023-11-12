import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import s from './label.module.scss';
import { TLabelProps } from '../../../lib/types/input.ts';

export class Label extends Component {
  constructor(props: TLabelProps) {
    const componentProps: IComponentProps = {
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
    return this.compile(() => (this.props as TLabelProps).labelText);
  }
}
