import Component from '@/shared/lib/component/Component.ts';
import Handlebars from 'handlebars';
import loginPage from '@/pages/login-page/ui/loginPage.template.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import s from './loginPage.module.scss';
import { TLoginPageChildren } from '../lib/types/loginPage.ts';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui/link';
import { context } from '../lib/context/context';
import { UserLogin } from '@/models/user.ts';
import AuthModel from '@/service/AuthService.ts';

export class LoginPage extends Component<TDefaultProps, TLoginPageChildren> {
  constructor() {
    const props = {
      ...context,
      className: s.loginPage,
    };

    const children: TLoginPageChildren = {
      form: new Form({
        ...context.form,
        submit: (userData) => {
          AuthModel.signIn(Object.fromEntries(userData) as UserLogin);
        },
      }),
      link: new Link(context.link),
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
