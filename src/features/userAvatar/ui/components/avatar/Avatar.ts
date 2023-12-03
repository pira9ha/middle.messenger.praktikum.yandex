import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import s from './avatar.module.scss';
import { TAvatarProps } from '../../../lib/types/avatar.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import avatar from './avatar.template.ts';
import { createPath } from '../../../lib/utils/createPath.ts';

export class Avatar extends Component {
  constructor(props: TAvatarProps) {
    const componentProps = {
      props: {
        className: s.avatarImage,
        altText: props?.altText || `Аватар пользователя ${props.name}`,
        avatar: createPath(props?.avatar),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(avatar);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  avatar: createPath(state?.user?.avatar),
}));

export const AvatarComponent = stateConnect(Avatar);
