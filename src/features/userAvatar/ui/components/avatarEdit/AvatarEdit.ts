import Component from '@/shared/lib/component/Component.ts';
import { TAvatarEditProps } from '../../../lib/types/avatar.ts';

export class AvatarEdit extends Component {
  constructor(props: TAvatarEditProps) {
    const componentProps = {
      props: {
        className: props.styleName,
        events: {
          click: props.onClick,
        },
      },
    };
    super('span', componentProps);
  }

  render() {
    return this.compile(() => 'Поменять<br>аватар');
  }
}
