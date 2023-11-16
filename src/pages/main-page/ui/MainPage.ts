import Handlebars from 'handlebars';
import mainPage from './mainPage.template';
import { context } from '@/pages/main-page/lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import {
  TMainPageChildren,
  TMainPageContext,
} from '@/pages/main-page/lib/types/mainPage.ts';
import { Link } from '@/shared/ui/link';
import s from './mainPage.module.scss';

export class MainPageComponent extends Component<
  TDefaultProps,
  TMainPageChildren
> {
  constructor(mainPageProps: TMainPageContext) {
    const componentProps = {
      props: {
        ...mainPageProps,
        className: s.mainPage,
      },
      children: {
        links: mainPageProps.links.map((link) => new Link(link.link)),
      },
    };

    super('nav', componentProps);
  }

  render() {
    const template = Handlebars.compile(mainPage);
    return this.compile(template);
  }
}

export const MainPage = () => new MainPageComponent(context);
