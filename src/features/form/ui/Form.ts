import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component';
import form from './form.template';
import s from './form.module.scss';
import { TFormChildren, TFormProps } from '../lib/types/form';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import { Button } from '@/shared/ui/button';
import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { classNames } from '@/shared/lib/utils/classNames.ts';

export class Form<T> extends Component {
  constructor(props: TFormProps<T>) {
    const componentProps: IComponentProps<TFormChildren> = {
      props: {
        ...props,
        className: classNames(s.form, [props.className]),
      },
      children: {
        buttons: Object.values(props.buttonContext).map(
          (button) => new Button(button),
        ),
        fields: Object.values(props.fieldsContext).map(
          (field) => new InputField(field as TInputFieldProps),
        ),
      },
    };
    super('form', componentProps);
  }
  render() {
    const template = Handlebars.compile(form);
    return this.compile(template);
  }
}
