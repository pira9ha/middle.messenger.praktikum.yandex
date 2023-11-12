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
    const fields: TInputFieldProps[] = Object.values(props.fields);
    const componentProps: IComponentProps<TFormChildren> = {
      props: {
        ...props,
        fields,
        className: classNames(s.form, [props.className]),
        events: {
          submit: (event: SubmitEvent | Event) => {
            event.preventDefault();

            if (event.currentTarget && event instanceof SubmitEvent) {
              const formData = new FormData(
                event.currentTarget as HTMLFormElement,
              );
              console.log(...formData);
            }
          },
        },
      },
      children: {
        buttons: props.buttons.map((button) => new Button(button)),
        fields: fields.map((field) => new InputField(field)),
      },
    };
    // debugger;
    super('form', componentProps);
  }
  render() {
    const template = Handlebars.compile(form);
    return this.compile(template);
  }
}
