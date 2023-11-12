import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import Handlebars from 'handlebars';
import {
  TProfileInfoChildren,
  TProfileInfoProps,
} from '@/pages/profile-page/lib/types/profile.ts';
import { Controls } from '../controls/Controls.ts';
import { ProfileInfoField } from '../profileInfoField/ProfileInfoField.ts';
import profileInfo from './profileInfo.template.ts';

export class ProfileInfo extends Component {
  constructor(profileInfoProps: TProfileInfoProps) {
    const info = Object.values(profileInfoProps.info);
    const props = {
      ...profileInfoProps,
      info,
    };

    const children: TProfileInfoChildren = {
      controls: new Controls(profileInfoProps.controls),
      info: info.map((infoField) => new ProfileInfoField(infoField)),
    };

    const componentProps: IComponentProps<TProfileInfoChildren> = {
      props,
      children,
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(profileInfo);
    return this.compile(template);
  }
}
