import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import Handlebars from 'handlebars';
import {
  TProfileInfoChildren,
  TProfileInfoProps,
} from '@/pages/profile-page/lib/types/profile.ts';
import { Controls } from '../controls/Controls.ts';
import { ProfileInfoField } from '../profileInfoField/ProfileInfoField.ts';
import profileInfo from './profileInfo.template.ts';

export class ProfileInfo extends Component<
  TDefaultProps,
  TProfileInfoChildren
> {
  constructor(profileInfoProps: TProfileInfoProps) {
    const children: TProfileInfoChildren = {
      controls: new Controls(profileInfoProps.controls),
      info: profileInfoProps.info.map(
        (infoField) => new ProfileInfoField(infoField),
      ),
    };

    const componentProps = {
      props: {},
      children,
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(profileInfo);
    return this.compile(template);
  }
}
