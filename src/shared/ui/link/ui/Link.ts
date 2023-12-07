import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import link from './link.template.ts';
import s from './link.module.scss';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { TLinkProps } from '../lib/types/link.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import router from '@/shared/lib/router/Router.ts';

export class Link extends Component<TLinkProps & TDefaultProps> {
  constructor(linkProps: TLinkProps) {
    const props: TLinkProps & TDefaultProps = {
      ...linkProps,
      className: classNames(s.link, [
        s[linkProps?.type ?? 'text'],
        linkProps.classNames,
      ]),
      attr: {
        // href: linkProps?.path,
        // target: linkProps?.target || '_self',
        // rel: 'noopener noreferrer',
      },
      events: {
        click: () => {
          // event.preventDefault();
          if (linkProps?.path) {
            // debugger;
            router.go(linkProps.path);
          } else {
            router.back();
          }
        },
      },
    };

    super('span', { props });
  }

  render() {
    const template = Handlebars.compile(link);
    return this.compile(template);
  }
}
