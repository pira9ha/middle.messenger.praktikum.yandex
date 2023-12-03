import { BaseAPI } from '@/api/BaseApi.ts';

export class UserApi extends BaseAPI {
  constructor() {
    super('/user');
  }

  async changeAvatar(data: FormData) {
    return this.http.PUT('/profile/avatar', {
      data,
      headers: {
        Accept: 'application/json',
      },
    });
  }
}
