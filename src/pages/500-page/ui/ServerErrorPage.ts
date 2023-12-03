import Handlebars from 'handlebars';
import s from './serverErrorPage.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import serverErrorPage from './serverErrorPage.template';
import { TErrorPageChildren } from '@/models/errorContext.ts';
import { Link } from '@/shared/ui/link';
import { StatusError } from '@/features/statusError';
import { context } from '../lib/context/context.ts';

export class ServerErrorPage extends Component<
  TDefaultProps,
  TErrorPageChildren
> {
  constructor() {
    const componentProps = {
      props: {
        ...context,
        className: s.page,
      },
      children: {
        link: new Link(context.link),
        statusError: new StatusError(context.statusError),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(serverErrorPage);
    return this.compile(template);
  }
}
