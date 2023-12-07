import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import Handlebars from 'handlebars';
import {
  TProfileInfoChildren,
  TProfileInfoProps,
} from '@/pages/profile-page/lib/types/profile.ts';
import { Controls } from '../controls/Controls.ts';
import profileInfo from './profileInfo.template.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import { mapUserInfo } from '@/pages/profile-page/lib/utils/mapUser.ts';

export class ProfileInfo extends Component<
  TDefaultProps,
  TProfileInfoChildren
> {
  constructor(profileInfoProps: TProfileInfoProps) {
    const children: TProfileInfoChildren = {
      controls: new Controls(profileInfoProps.controls),
    };

    const componentProps = {
      props: {
        info: profileInfoProps.info,
      },
      children,
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(profileInfo);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => {
  return {
    info: mapUserInfo(state),
  };
});

export const ProfileInfoComponent = stateConnect(ProfileInfo);
