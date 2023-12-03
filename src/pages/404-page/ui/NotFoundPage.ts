import Handlebars from 'handlebars';
import s from './notFoundPage.module.scss';
import notFoundPage from './notFoundPage.template';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { TErrorPageChildren } from '@/models/errorContext.ts';
import Component from '@/shared/lib/component/Component.ts';
import { Link } from '@/shared/ui/link';
import { StatusError } from '@/features/statusError';
import { context } from '../lib/context/context.ts';

export class NotFoundPage extends Component<TDefaultProps, TErrorPageChildren> {
  constructor() {
    const componentProps = {
      props: {
        ...context,
        className: s.page,
      },
      children: {
        statusError: new StatusError(context.statusError),
        link: new Link(context.link),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(notFoundPage);
    return this.compile(template);
  }
}
