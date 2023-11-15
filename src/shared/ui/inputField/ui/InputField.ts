import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import inputField from './inputField.template.ts';
import { TInputFieldChildren, TInputFieldProps } from '../lib/types/input.ts';
import s from './inputField.module.scss';
import { Input } from '@/shared/ui/input';
import { Label } from './components/label/Label.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export class InputField extends Component<
  TInputFieldProps & TDefaultProps,
  TInputFieldChildren
> {
  constructor(fieldProps: TInputFieldProps) {
    const componentProps = {
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
