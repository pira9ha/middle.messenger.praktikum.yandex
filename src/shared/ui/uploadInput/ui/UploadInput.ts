import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import inputField from './inputField.template.ts';
import { TUploadInputChildren, TUploadProps } from '../lib/types/input.ts';
import s from './inputField.module.scss';
import { Label } from './components/label/Label.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { updateLoaded } from '../lib/utils/updateLoaded.ts';

export class UploadInput extends Component<
  TDefaultProps,
  TUploadInputChildren
> {
  constructor(props: TUploadProps) {
    const componentProps = {
      props: {
        className: s.field,
      },
      children: {
        label: new Label({
          ...props,
          onChange: updateLoaded,
        }),
      },
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(inputField);
    return this.compile(template);
  }
}
