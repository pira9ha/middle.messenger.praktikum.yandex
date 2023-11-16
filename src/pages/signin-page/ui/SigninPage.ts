import Handlebars from 'handlebars';
import signinPage from './signinPage.template';
import { context } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './signinPage.module.scss';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui/link';
import {
  TSigninPage,
  TSigninPageChildren,
  TSigninPageProps,
} from '../lib/types/signinPage.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export class SigninPageComponent extends Component<
  TSigninPage,
  TSigninPageChildren
> {
  constructor(signinPageProps: TSigninPageProps) {
    const props: TSigninPage & TDefaultProps = {
      formName: signinPageProps.formName,
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
