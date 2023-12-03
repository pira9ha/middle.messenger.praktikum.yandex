import { UserLogin, UserModel } from '@/models/user.ts';
import { AuthApi } from '@/api/AuthApi.ts';
import store from '@/shared/lib/store/Store.ts';
import router from '@/shared/lib/router/Router.ts';
import { Routes } from '@/shared/constants/routes.ts';
import { ErrorResponse } from '@/shared/lib/httpTransport/types.ts';
import { DEFAULT_ERROR } from '@/service/constants.ts';
import storageController from '@/shared/lib/StorageController/StorageController.ts';
import { CURRENT_USER } from '@/shared/constants/storageKeys.ts';
import { updateUser } from '@/service/updateUser.ts';

class AuthService {
  private static _instance: AuthService;
  private _authApi = new AuthApi();

  constructor() {
    if (AuthService._instance) {
      return AuthService._instance;
    }

    AuthService._instance = this;
  }

  async signUp(userData: UserModel) {
    try {
      const signUpRes = await this._authApi.signUp(userData);

      if (signUpRes.status === 200) {
        router.go(Routes.LOGIN);
      } else {
        store.setState('submitError', 'error text');
      }
    } catch (e) {
      store.setState('submitError', e);
    }
  }

  async signIn(userData: UserLogin) {
    try {
      const signUpRes = await this._authApi.signIn(userData);

      if (signUpRes.status === 200) {
        router.go(Routes.CHATS);
      } else {
        const errorResponse: ErrorResponse = signUpRes.response
          ? JSON.parse(signUpRes.response)
          : DEFAULT_ERROR;
        store.setState('submitError', errorResponse.reason);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('submitError', e.message);
      }
    }
  }

  async user() {
    try {
      const signUpRes = await this._authApi.user();

      if (signUpRes.status === 200) {
        updateUser(signUpRes.response);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('submitError', e.message);
      }
    }
  }

  async logOut() {
    try {
      const signUpRes = await this._authApi.logOut();

      if (signUpRes.status === 200) {
        storageController.deleteItem(CURRENT_USER);
        store.setState('user', null);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('submitError', e.message);
      }
    }
  }
}

export default new AuthService();
