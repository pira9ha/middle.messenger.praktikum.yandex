import Handlebars from 'handlebars';
import s from './serverErrorPage.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import serverErrorPage from './serverErrorPage.template';
import { context } from '../lib/context/context.ts';
import {
  TErrorPageChildren,
  TErrorPageContext,
} from '@/models/errorContext.ts';
import { Link } from '@/shared/ui/link';
import { StatusError } from '@/features/statusError';

export class ServerErrorPageComponent extends Component {
  constructor(props: TErrorPageContext) {
    const componentProps: IComponentProps<TErrorPageChildren> = {
      props: {
        ...props,
        className: s.page,
      },
      children: {
        link: new Link(props.link),
        statusError: new StatusError(props.statusError),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(serverErrorPage);
    return this.compile(template);
  }
}

export const ServerErrorPage = () => new ServerErrorPageComponent(context);
