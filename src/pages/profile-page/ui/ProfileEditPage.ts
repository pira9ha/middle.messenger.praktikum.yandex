import Handlebars from 'handlebars';
import s from './profilePage.module.scss';
import profile from './profilePage.template';
import { profileEditPageContext } from '../lib/context/context.ts';
import Component from '@/shared/lib/component/Component.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import {
  IProfileEditPageChildren,
  IProfileEditPageProps,
} from '../lib/types/profile.ts';
import { Form } from '@/features/form';
import { UserAvatar } from '@/features/userAvatar';
import { Link } from '@/shared/ui/link';
import { mapUserForm } from '@/pages/profile-page/lib/utils/mapUser.ts';
import store from '@/shared/lib/store/Store.ts';
import authService from '@/service/AuthService.ts';
import { connect } from '@/shared/lib/store/connect.ts';
import { State } from '@/shared/lib/store/types.ts';

export class ProfileEditPage extends Component<
  IProfileEditPageProps & TDefaultProps,
  IProfileEditPageChildren
> {
  constructor() {
    authService.user();

    const props = {
      ...profileEditPageContext,
      className: s.profilePage,
    };

    const children: IProfileEditPageChildren = {
      userAvatar: new UserAvatar(props.userAvatar),
      link: new Link(props.link),
      reset: new Link(props.reset),
      formEdit: new Form(props.formEditContext),
    };

    const componentProps = {
      props,
      children,
    };

    super('div', componentProps);
  }

  setProps(nextProps: Partial<IProfileEditPageProps & TDefaultProps>) {
    if (nextProps?.user) {
      const formEditContext = this._updateFormProps();
      const form = this.children.formEdit as Form;
      form.updateFields(formEditContext!);
    }

    super.setProps(nextProps);
  }

  _updateFormProps() {
    const storeUser = store.getState();

    if (storeUser?.user) {
      return mapUserForm(this.props?.formEditContext, storeUser?.user);
    }
  }

  render() {
    const template = Handlebars.compile(profile);
    return this.compile(template);
  }
}

const stateConnect = connect((state: State) => ({
  user: state?.user,
}));

export const ProfileEdit = stateConnect(ProfileEditPage);
