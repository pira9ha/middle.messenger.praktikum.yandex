import Handlebars from 'handlebars';
import statusError from './statusError.template.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './statusError.module.scss';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { TStatusErrorProps } from '../lib/types/statusError.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';

export class StatusError extends Component<TStatusErrorProps & TDefaultProps> {
  constructor(props: TStatusErrorProps) {
    const componentProps = {
      props: {
        ...props,
        className: s.statusError,
      },
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(statusError);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  errorCode: state?.serverError,
}));

export const StatusErrorComponent = stateConnect(StatusError);
