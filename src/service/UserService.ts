import store from '@/shared/lib/store/Store.ts';
import { UserApi } from '@/api/UsersApi.ts';
import { updateUser } from './updateUser.ts';
import modalsController from '@/shared/lib/ModalsController/ModalsController.ts';
import { UserChangePassword, UserModel } from '@/models/user.ts';
import router from '@/shared/lib/router/Router.ts';
import { Routes } from '@/shared/constants/routes.ts';
import { handlingErrorStatus } from './handlingErrorStatus.ts';

class UserService {
  private _userApi = new UserApi();

  async changeAvatar(newAvatar: FormData) {
    try {
      const changeAvatarRes = await this._userApi.changeAvatar(newAvatar);

      if (changeAvatarRes.status === 200) {
        updateUser(changeAvatarRes.response);
      } else {
        handlingErrorStatus(changeAvatarRes);
      }
      modalsController.closeModal();
    } catch (e) {
      if (e instanceof Error) {
        store.setState('submitError', e.message);
      }
    }
  }

  async updateProfile(updatedUser: UserModel) {
    try {
      const updateUserRes = await this._userApi.updateProfile(updatedUser);

      if (updateUserRes.status === 200) {
        updateUser(updateUserRes.response);
        return true;
      } else {
        handlingErrorStatus(updateUserRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async updatePassword(newPassword: UserChangePassword) {
    try {
      const updateUserRes = await this._userApi.updatePassword(newPassword);

      if (updateUserRes.status === 200) {
        router.go(Routes.PROFILE);
      } else {
        handlingErrorStatus(updateUserRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('submitError', e.message);
      }
    }
  }
}

export default new UserService();
