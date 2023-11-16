import Component from '@/shared/lib/component/Component.ts';
import s from './profileInfoField.module.scss';
import Handlebars from 'handlebars';
import profileInfoField from './profileInfoField.template.ts';
import { TProfileInfoField } from '../../../lib/types/profile.ts';

export class ProfileInfoField extends Component {
  constructor(props: TProfileInfoField) {
    const componentProps = {
      props: {
        ...props,
        className: s.dataField,
      },
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(profileInfoField);
    return this.compile(template);
  }
}
