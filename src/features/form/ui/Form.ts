import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component';
import form from './form.template';
import s from './form.module.scss';
import { TFormChildren, TFormProps } from '../lib/types/form';
import { Button } from '@/shared/ui/button';
import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { UploadInput } from '@/shared/ui/uploadInput';

export class Form extends Component<TFormProps & TDefaultProps, TFormChildren> {
  constructor(formProps: TFormProps) {
    const fields: TInputFieldProps[] = Object.values(formProps.fields);

    const props: TFormProps & TDefaultProps = {
      ...formProps,
      className: classNames(s.form, [formProps.classNames]),
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
    };

    const children: TFormChildren = {
      buttons: formProps.buttons.map((button) => new Button(button)),
      fields: fields.map((field) => new InputField(field)),
      uploadInput: props?.uploadInput
        ? new UploadInput(props?.uploadInput)
        : undefined,
    };

    const componentProps = { props, children };

    super('form', componentProps);
  }

  validate() {
    if (Array.isArray(this.children?.fields)) {
      console.log(this.children?.fields);
    }
  }

  render() {
    const template = Handlebars.compile(form);
    // debugger;
    return this.compile(template);
  }
}
