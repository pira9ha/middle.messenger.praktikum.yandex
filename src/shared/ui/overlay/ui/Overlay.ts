import s from './overlay.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { TOverlayProps } from '../lib/types/overlay.ts';

export class Overlay extends Component {
  constructor(overlayProps: TOverlayProps) {
    const componentProps = {
      props: {
        className: s.overlay,
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
