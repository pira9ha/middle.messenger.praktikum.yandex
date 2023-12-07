import store from '@/shared/lib/store/Store.ts';
import { ChatsApi } from '@/api/ChatsApi.ts';
import { handlingErrorStatus } from './handlingErrorStatus.ts';

class ChatsService {
  private _chatsApi = new ChatsApi();

  async getChats() {
    try {
      const chatsRes = await this._chatsApi.getChats();

      if (chatsRes.status === 200) {
        store.setState('clientError', null);
      } else {
        handlingErrorStatus(chatsRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }
}

export default new ChatsService();
