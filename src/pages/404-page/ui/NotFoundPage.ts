import Handlebars from 'handlebars';
import s from './notFoundPage.module.scss';
import notFoundPage from './notFoundPage.template';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { TErrorPageChildren } from '@/models/errorContext.ts';
import Component from '@/shared/lib/component/Component.ts';
import { Link } from '@/shared/ui/link';
import { StatusError } from '@/features/statusError';
import { Routes } from '@/shared/constants/routes.ts';

export class NotFoundPage extends Component<TDefaultProps, TErrorPageChildren> {
  constructor() {
    const componentProps = {
      props: {
        className: s.page,
      },
      children: {
        statusError: new StatusError({
          errorCode: 404,
          title: 'Не туда попали',
        }),
        link: new Link({
          title: 'Назад',
          classNames: s.link,
          path: Routes.CHATS,
        }),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(notFoundPage);
    return this.compile(template);
  }
}
