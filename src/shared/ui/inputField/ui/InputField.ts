import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import inputField from './inputField.template.ts';
import { IInputFieldChildren, TInputFieldProps } from '../lib/types/input.ts';
import s from './inputField.module.scss';
import { Input } from './components/input/Input.ts';
import { Label } from './components/label/Label.ts';

export class InputField extends Component {
  constructor(fieldProps: TInputFieldProps) {
    const componentProps: IComponentProps<IInputFieldChildren> = {
      props: {
        ...fieldProps,
        className: s.field,
      },
      children: {
        input: new Input(fieldProps.input),
        label: new Label(fieldProps.label),
      },
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(inputField);
    return this.compile(template);
  }
}
