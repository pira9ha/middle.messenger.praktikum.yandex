import { fromFormData } from '@/shared/lib/utils/fromFormData.ts';
import { UserModel } from '@/models/user.ts';
import userService from '@/service/UserService.ts';
import router from '@/shared/lib/router/Router.ts';
import { Routes } from '@/shared/constants/routes.ts';

export const updateForm = async (updateUser: FormData) => {
  const user = fromFormData<UserModel>(updateUser);
  const res = await userService.updateProfile(user);

  if (res) {
    router.go(Routes.PROFILE);
  }
};
