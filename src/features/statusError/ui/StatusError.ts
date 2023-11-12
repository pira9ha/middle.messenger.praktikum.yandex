import Handlebars from 'handlebars';
import statusError from './statusError.template.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './statusError.module.scss';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import { TStatusErrorProps } from '../lib/types/statusError.ts';

export class StatusError extends Component {
  constructor(props: TStatusErrorProps) {
    const componentProps: IComponentProps = {
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
