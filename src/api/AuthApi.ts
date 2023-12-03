import { BaseAPI } from '@/api/BaseApi.ts';
import { UserLogin, UserModel } from '@/models/user.ts';

export class AuthApi extends BaseAPI {
  constructor() {
    super('/auth');
  }

  async signUp(data: UserModel) {
    return this.http.POST('/signup', {
      data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  signIn(data: UserLogin) {
    return this.http.POST('/signin', {
      data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  user() {
    return this.http.GET('/user', {
      headers: {
        Accept: 'application/json',
      },
    });
  }

  logOut() {
    return this.http.POST('/logout');
  }
}
