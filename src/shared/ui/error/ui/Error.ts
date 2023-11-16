import Component from '@/shared/lib/component/Component.ts';
import s from './error.module.scss';
import Handlebars from 'handlebars';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import error from './error.template.ts';
import { TValidationErrorProps } from '../lib/types/error.ts';

export class Error extends Component<TValidationErrorProps & TDefaultProps> {
  constructor(props: TValidationErrorProps) {
    const componentProps = {
      props: {
        ...props,
        className: s.validationError,
      },
    };

    super('span', componentProps);
  }

  render() {
    const template = Handlebars.compile(error);
    return this.compile(template);
  }
}
