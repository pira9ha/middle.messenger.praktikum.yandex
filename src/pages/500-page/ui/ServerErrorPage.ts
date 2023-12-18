import Handlebars from 'handlebars';
import s from './serverErrorPage.module.scss';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import serverErrorPage from './serverErrorPage.template';
import { TErrorPageChildren } from '@/models/errorContext.ts';
import { Link } from '@/shared/ui/link';
import { StatusErrorComponent } from '@/features/statusError';
import store from '@/shared/lib/store/Store.ts';

export class ServerErrorPage extends Component<
  TDefaultProps,
  TErrorPageChildren
> {
  constructor() {
    const state = store.getState()?.serverError;

    const componentProps = {
      props: {
        className: s.page,
      },
      children: {
        link: new Link({
          title: 'Назад',
          classNames: s.link,
          isBackButton: true,
        }),
        statusError: new StatusErrorComponent({
          errorCode: state ?? 500,
          title: 'Мы уже фиксим',
        }),
      },
    };
    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(serverErrorPage);
    return this.compile(template);
  }
}
