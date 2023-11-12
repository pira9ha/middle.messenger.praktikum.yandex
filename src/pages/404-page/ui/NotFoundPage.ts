import Handlebars from 'handlebars';
import s from './notFoundPage.module.scss';
import notFoundPage from './notFoundPage.template';
import { context } from '../lib/context/context.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import {
  TErrorPageChildren,
  TErrorPageContext,
} from '@/models/errorContext.ts';
import Component from '@/shared/lib/component/Component.ts';
import { Link } from '@/shared/ui/link';
import { StatusError } from '@/features/statusError';

export class NotFoundPageComponent extends Component {
  constructor(props: TErrorPageContext) {
    const componentProps: IComponentProps<TErrorPageChildren> = {
      props: {
        ...props,
        className: s.page,
      },
      children: {
        statusError: new StatusError(props.statusError),
        link: new Link(props.link),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(notFoundPage);
    return this.compile(template);
  }
}

export const NotFoundPage = () => new NotFoundPageComponent(context);
