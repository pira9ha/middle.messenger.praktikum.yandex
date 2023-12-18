import { TProfileInfoProps } from '../types/profile.ts';
import {
  mapUserForm,
  mapUserInfo,
} from '@/pages/profile-page/lib/utils/mapUser.ts';
import store from '@/shared/lib/store/Store.ts';
import { TFormProps } from '@/features/form/lib/types/form.ts';
import { FORM_FIELDS } from '@/pages/profile-page/lib/context/formMock.ts';

type CreateProfileContext = {
  info: TProfileInfoProps['info'];
};

type CreateProfileEditContext = {
  fields: TFormProps['fields'];
};

export const profileAvatarContext = (isNamed?: boolean) => {
  const state = store.getState();

  return {
    name: state?.user?.first_name ?? '',
    avatar: state?.user?.avatar,
    named: Boolean(isNamed),
  };
};

export const createProfileContext = (): CreateProfileContext => {
  const state = store.getState();

  const info = mapUserInfo(state);

  return {
    info,
  };
};

export const createProfileEditContext = (): CreateProfileEditContext => {
  const state = store.getState();
  let fields = FORM_FIELDS;

  if (state?.user) {
    fields = mapUserForm(fields, state?.user);
  }

  return {
    fields,
  };
};
