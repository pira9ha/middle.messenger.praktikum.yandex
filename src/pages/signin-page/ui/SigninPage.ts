import Handlebars from 'handlebars';
import signinPage from './signinPage.template';
import { context } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from '@/pages/login-page/ui/loginPage.module.scss';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui/link';
import {
  TSigninPageChildren,
  TSigninPageProps,
} from '@/pages/signin-page/lib/types/signinPage.ts';

export class SigninPageComponent extends Component<
  TSigninPageProps,
  TSigninPageChildren
> {
  constructor(signinPageProps: TSigninPageProps) {
    const props = {
      ...signinPageProps,
      className: s.signinPage,
    };

    const children: TSigninPageChildren = {
      form: new Form(signinPageProps.form),
      link: new Link(signinPageProps.link),
    };

    const componentProps = {
      props,
      children,
    };

    super('div', componentProps);
  }
  render() {
    const template = Handlebars.compile(signinPage);
    return this.compile(template);
  }
}

export const SigninPage = () => new SigninPageComponent(context);
