import s from './button.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { ButtonVariant, IButtonProps } from '../lib/types/button';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';

export class Button extends Component {
  constructor(props: IButtonProps) {
    const variant = props?.variant ?? ButtonVariant.DEFAULT;

    const componentProps: IComponentProps = {
      props: {
        children: props?.iconImage || props?.title,
        attr: {
          type: props.type || 'button',
          disabled: props?.disabled || false,
        },
        className: classNames(s.button, [s[variant], props?.customClass]),
        events: {
          click: (evt: Event) => {
            props?.onClick?.(evt);
          },
        },
        ...props,
      },
    };
    super('button', componentProps);
  }

  render() {
    const elementContent = this.props?.children
      ? this.props?.children.toString()
      : '';
    return this.compile(() => elementContent);
  }
}
