import Handlebars from 'handlebars';
import signinPage from './signinPage.template';
import { context } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import s from './signinPage.module.scss';
import { Form } from '@/features/form';
import { Link } from '@/shared/ui/link';
import { TSigninPage, TSigninPageChildren } from '../lib/types/signinPage.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import AuthModel from '@/service/AuthService.ts';
import { UserModel } from '@/models/user.ts';
import { fromFormData } from '@/shared/lib/utils/fromFormData.ts';

export class SigninPage extends Component<TSigninPage, TSigninPageChildren> {
  constructor() {
    const props: TSigninPage & TDefaultProps = {
      formName: context.formName,
      className: s.signinPage,
    };

    const children: TSigninPageChildren = {
      form: new Form({
        ...context.form,
        submit: (userData) => {
          AuthModel.signUp(fromFormData<UserModel>(userData));
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
    const template = Handlebars.compile(signinPage);
    return this.compile(template);
  }
}
