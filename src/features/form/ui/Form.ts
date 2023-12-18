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
import { ErrorComponent } from './formError/FormError.ts';

export class Form extends Component<TDefaultProps, TFormChildren> {
  constructor(formProps: TFormProps) {
    const fields: TInputFieldProps[] = Object.values(formProps.fields);

    const props: TDefaultProps = {
      className: classNames(s.form, [formProps.classNames]),
      events: {
        submit: (event: SubmitEvent | Event) => {
          event.preventDefault();
          const validationResult = this.validate();

          if (
            !validationResult ||
            !event.currentTarget ||
            !(event instanceof SubmitEvent)
          ) {
            return;
          }

          const formData = new FormData(event.currentTarget as HTMLFormElement);
          formProps?.submit?.(formData);
        },
        ...formProps?.events,
      },
    };

    const children: TFormChildren = {
      buttons: formProps.buttons.map((button) => new Button(button)),
      fields: fields.map((field) => new InputField(field)),
      uploadInput: formProps?.uploadInput
        ? new UploadInput(formProps?.uploadInput)
        : undefined,
      error: new ErrorComponent(),
    };

    const componentProps = { props, children };

    super('form', componentProps);
  }

  validate() {
    if (Array.isArray(this.children?.fields)) {
      const validationResult = this.children?.fields.map((field) =>
        field.validate(),
      );
      return validationResult?.every((value) => value === undefined);
    }
  }

  updateFields(fieldsProps: TInputFieldProps[]) {
    if (Array.isArray(this.children?.fields)) {
      this.children?.fields.forEach((field) => {
        const fieldProp = fieldsProps.find(
          (prop) => prop.label === field.props.label,
        );

        if (fieldProp) {
          field.setProps(fieldProp);
        }
      });
    }
  }

  render() {
    const template = Handlebars.compile(form);
    return this.compile(template);
  }
}
