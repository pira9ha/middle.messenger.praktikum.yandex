import Component from '@/shared/lib/component/Component.ts';
import Handlebars from 'handlebars';
import loginPage from '@/pages/login-page/ui/loginPage.template.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import s from './loginPage.module.scss';
import { TLoginPageChildren, TLoginPageProps } from '../lib/types/loginPage.ts';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui/link';
import { context } from '../lib/context/context';

export class LoginPageComponent extends Component<
  TLoginPageProps & TDefaultProps,
  TLoginPageChildren
> {
  constructor(loginPageProps: TLoginPageProps) {
    const props = {
      ...loginPageProps,
      className: s.loginPage,
    };

    const children: TLoginPageChildren = {
      form: new Form(loginPageProps.form),
      link: new Link(loginPageProps.link),
    };

    const componentProps = {
      props,
      children,
    };

    super('div', componentProps);
  }

  render() {
    const template = Handlebars.compile(loginPage);
    return this.compile(template);
  }
}

export const LoginPage = () => new LoginPageComponent(context);
