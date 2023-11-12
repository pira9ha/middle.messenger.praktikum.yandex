import Handlebars from 'handlebars';
import Component from '@/shared/lib/component/Component.ts';
import link from './link.template.ts';
import s from './link.module.scss';
import { classNames } from '@/shared/lib/utils/classNames.ts';
import { TLinkProps } from '../lib/types/link.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';

export class Link extends Component {
  constructor(linkProps: TLinkProps) {
    const componentProps: IComponentProps = {
      props: {
        ...linkProps,
        className: classNames(s.link, [
          s[linkProps?.type ?? 'text'],
          linkProps.className,
        ]),
        attr: {
          href: linkProps?.path,
          target: linkProps?.target || '_self',
          rel: 'noopener noreferrer',
        },
      },
    };

    if (linkProps.isBackButton) {
      componentProps.props.events = {
        click: () => {
          history.back();
        },
      };
    }

    super('a', componentProps);
  }

  render() {
    const template = Handlebars.compile(link);
    return this.compile(template);
  }
}
