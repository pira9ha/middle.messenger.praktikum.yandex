import { BaseAPI } from '@/api/BaseApi.ts';
import {
  UserChangePassword,
  UserLoginSearch,
  UserModel,
} from '@/models/user.ts';

export class UserApi extends BaseAPI {
  constructor() {
    super('/user');
  }

  async changeAvatar(data: FormData) {
    return this.http.PUT('/profile/avatar', {
      data,
    });
  }

  async updateProfile(data: UserModel) {
    return this.http.PUT('/profile', {
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async updatePassword(data: UserChangePassword) {
    return this.http.PUT('/password', {
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async searchUsersByLogin(data: UserLoginSearch) {
    return this.http.POST('/search', {
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
