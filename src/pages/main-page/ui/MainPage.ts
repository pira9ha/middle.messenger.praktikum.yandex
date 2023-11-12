import Handlebars from 'handlebars';
import mainPage from './mainPage.template';
import { context } from '@/pages/main-page/lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import { IComponentProps } from '@/shared/lib/component/componentTypes.ts';
import {
  TMainPageChildren,
  TMainPageContext,
} from '@/pages/main-page/lib/types/mainPage.ts';
import { Link } from '@/shared/ui/link';
import s from './mainPage.module.scss';

export class MainPageComponent extends Component {
  constructor(mainPageProps: TMainPageContext) {
    const links = Object.values(mainPageProps).map((prop) => prop.link);
    const componentProps: IComponentProps<TMainPageChildren> = {
      props: {
        ...mainPageProps,
        className: s.mainPage,
        links,
      },
      children: {
        links: links.map((link) => new Link(link)),
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
