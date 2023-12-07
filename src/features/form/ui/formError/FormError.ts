import Component from '@/shared/lib/component/Component.ts';
import s from './formError.module.scss';
import Handlebars from 'handlebars';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import error from './formError.template.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';
import { TFormErrorProps } from '../../lib/types/form.ts';

export class FormError extends Component<TFormErrorProps & TDefaultProps> {
  constructor(props?: TFormErrorProps) {
    const componentProps = {
      props: {
        ...props,
        className: s.validationError,
      },
    };

    super('div', componentProps);
  }

  override setProps(nextProps: TFormErrorProps & TDefaultProps) {
    super.setProps(nextProps);

    if (this.props?.error) {
      this.show();
    } else {
      this.hide();
    }
  }

  render() {
    const template = Handlebars.compile(error);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  error: state?.clientError,
}));

export const ErrorComponent = stateConnect(FormError);
