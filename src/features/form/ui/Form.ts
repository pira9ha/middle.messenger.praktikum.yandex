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

export class Form extends Component<TDefaultProps, TFormChildren> {
  constructor(formProps: TFormProps) {
    const fields: TInputFieldProps[] = Object.values(formProps.fields);

    const props: TDefaultProps = {
      className: classNames(s.form, [formProps.classNames]),
      events: {
        submit: (event: SubmitEvent | Event) => {
          event.preventDefault();
          const validationResult = this.validate();

          if (!validationResult) {
            return;
          }

          if (event.currentTarget && event instanceof SubmitEvent) {
            const formData = new FormData(
              event.currentTarget as HTMLFormElement,
            );
            console.log(Object.fromEntries(formData));
          }
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

  override setProps(nextProps: Partial<TDefaultProps> | TDefaultProps) {
    super.setProps(nextProps);

    if (this.children.uploadInput && nextProps?.value === undefined) {
      const { uploadInput } = this.children;
      if (uploadInput instanceof UploadInput) {
        uploadInput.setProps({ value: undefined });
      }
    }
  }

  render() {
    const template = Handlebars.compile(form);
    return this.compile(template);
  }
}
