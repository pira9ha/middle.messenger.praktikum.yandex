import store from '@/shared/lib/store/Store.ts';
import { UserApi } from '@/api/UsersApi.ts';
import { updateUser } from '@/service/updateUser.ts';
import { ErrorResponse } from '@/shared/lib/httpTransport/types.ts';
import { DEFAULT_ERROR } from '@/service/constants.ts';
import modalsController from '@/shared/lib/ModalsController/ModalsController.ts';

class UserService {
  private static _instance: UserService;
  private _userApi = new UserApi();

  constructor() {
    if (UserService._instance) {
      return UserService._instance;
    }

    UserService._instance = this;
  }

  async changeAvatar(newAvatar: FormData) {
    try {
      const changeAvatarRes = await this._userApi.changeAvatar(newAvatar);

      if (changeAvatarRes.status === 200) {
        updateUser(changeAvatarRes.response);
      } else {
        const errorResponse: ErrorResponse = changeAvatarRes.response
          ? JSON.parse(changeAvatarRes.response)
          : DEFAULT_ERROR;
        store.setState('submitError', errorResponse.reason);
        return false;
      }
      modalsController.closeModal();
    } catch (e) {
      store.setState('submitError', e);
    }
  }
}

export default new UserService();
