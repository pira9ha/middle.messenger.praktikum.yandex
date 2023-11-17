import s from './button.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { ButtonVariant, IButtonProps } from '../lib/types/button';

export class Button extends Component {
  constructor(props: IButtonProps) {
    const variant = props?.variant ?? ButtonVariant.DEFAULT;

    const componentProps = {
      props: {
        children: props?.iconImage || props?.title,
        attr: {
          type: props.type || 'button',
          disabled: !!props?.disabled,
        },
        className: classNames(s.button, [s[variant], props?.customClass]),
        events: {
          click: (evt: Event) => {
            props?.onClick?.(evt);
          },
        },
      },
    };
    super('button', componentProps);
  }

  render() {
    const elementContent = this.props?.children as string;
    return this.compile(() => elementContent);
  }
}
