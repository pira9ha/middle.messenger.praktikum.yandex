import Component from '@/shared/lib/component/Component.ts';
import s from './input.module.scss';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { InputProps, TInputProps } from '../lib/types/input';
import { mapAttr } from '@/shared/ui/input/lib/utils/mapAttr.ts';

export class Input extends Component<InputProps> {
  constructor(props: TInputProps) {
    const componentProps = {
      props: {
        ...props,
        className: classNames(s.input, [props?.className]),
        attr: mapAttr(props),
        event: {
          ...props?.events,
        },
      },
    };

    super('input', componentProps);
  }

  _updateAttr() {
    const attr = mapAttr(this.props);
    const element = this.getContent();

    if (element) {
      Object.entries(attr).forEach(([key, value]) => {
        if (value) {
          element.setAttribute(key, value.toString());
        }
      });
    }
  }

  setProps(nextProps: Partial<InputProps> | InputProps) {
    super.setProps(nextProps);
    this._updateAttr();

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
