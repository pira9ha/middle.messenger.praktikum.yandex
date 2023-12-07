import { BaseAPI } from '@/api/BaseApi.ts';
import { UserChangePassword, UserModel } from '@/models/user.ts';

export class ChatsApi extends BaseAPI {
  constructor() {
    super('/chats');
  }

  async getChats() {
    return this.http.GET('', {});
  }

  async updateProfile(data: UserModel) {
    return this.http.PUT('/profile', {
      data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }

  async updatePassword(data: UserChangePassword) {
    return this.http.PUT('/password', {
      data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
}
