import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import inputField from './inputField.template.ts';
import { TInputFieldChildren, TInputFieldProps } from '../lib/types/input.ts';
import s from './inputField.module.scss';
import { Input } from '@/shared/ui/input';
import { Label } from './components/label/Label.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { Error } from '@/shared/ui/error';
import { getValidation } from '@/shared/lib/validation/getValidation.ts';
import { Fields } from '@/shared/lib/validation/constants.ts';
import { isEqual } from '@/shared/lib/utils/isEqual.ts';

export class InputField extends Component<
  TInputFieldProps & TDefaultProps,
  TInputFieldChildren
> {
  constructor(fieldProps: TInputFieldProps) {
    const fieldType = fieldProps.field || Fields.MESSAGE;

    const componentProps = {
      props: {
        ...fieldProps,
        validate: getValidation(fieldType),
        className: s.field,
      },
      children: {
        input: new Input({
          ...fieldProps.input,
          error: fieldProps.errorMessage,
          events: {
            blur: () => {
              this.validate();
            },
          },
        }),
        label: new Label(fieldProps.label),
        error: new Error({
          error: fieldProps?.errorMessage,
        }),
      },
    };

    super('div', componentProps);
  }

  setProps(
    nextProps:
      | Partial<TInputFieldProps & TDefaultProps>
      | (TInputFieldProps & TDefaultProps),
  ) {
    if (nextProps.input && !isEqual(nextProps.input, this.props.input)) {
      (this.children.input as Input).setProps(nextProps.input);
    }

    super.setProps(nextProps);
  }

  validate() {
    const { input, error } = this.children;

    if (!(input instanceof Input) || !(error instanceof Error)) {
      return;
    }

    const inputContent = input.getContent() as HTMLInputElement;
    const validate = this.props.validate?.(inputContent);
    const validateResult = { error: validate };

    input.setProps(validateResult);
    error.setProps(validateResult);
    this.setProps({ errorMessage: validate });

    return validate;
  }

  render() {
    const template = Handlebars.compile(inputField);
    return this.compile(template);
  }
}
