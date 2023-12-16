import { UserLogin, UserModel } from '@/models/user.ts';
import { AuthApi } from '@/api/AuthApi.ts';
import store from '@/shared/lib/store/Store.ts';
import router from '@/shared/lib/router/Router.ts';
import { Routes } from '@/shared/constants/routes.ts';
import { updateUser } from './updateUser.ts';
import { handlingErrorStatus } from './handlingErrorStatus.ts';

class AuthService {
  private _authApi = new AuthApi();

  async signUp(userData: UserModel) {
    try {
      const signUpRes = await this._authApi.signUp(userData);

      if (signUpRes.status === 200) {
        router.go(Routes.CHATS);
        store.setState('clientError', null);
      } else {
        handlingErrorStatus(signUpRes);
      }
    } catch (e) {
      store.setState('clientError', e);
    }
  }

  async signIn(userData: UserLogin) {
    try {
      const signInRes = await this._authApi.signIn(userData);

      if (signInRes.status === 200) {
        router.go(Routes.CHATS);
        store.setState('clientError', null);
      } else {
        handlingErrorStatus(signInRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async user() {
    try {
      const signUpRes = await this._authApi.user();

      if (signUpRes.status === 200) {
        updateUser(signUpRes.response);
        store.setState('clientError', null);
      } else {
        handlingErrorStatus(signUpRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async logOut() {
    try {
      const logOutRes = await this._authApi.logOut();

      if (logOutRes.status === 200) {
        store.setState('user', null);
        store.setState('clientError', null);
        router.go(Routes.LOGIN);
      } else {
        handlingErrorStatus(logOutRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }
}

export default new AuthService();
