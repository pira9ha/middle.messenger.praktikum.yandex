import s from './overlay.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { TOverlayProps } from '../lib/types/overlay.ts';
import { classNames } from '@/shared/lib/utils/classNames.ts';

export class Overlay extends Component {
  constructor(overlayProps: TOverlayProps) {
    const componentProps = {
      props: {
        className: classNames(s.overlay, [overlayProps?.className]),
        events: {
          click: (event: MouseEvent | Event) => {
            overlayProps?.onClick?.(event);
          },
        },
      },
    };
    super('div', componentProps);
  }

  render() {
    return this.compile();
  }
}
