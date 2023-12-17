import store from '@/shared/lib/store/Store.ts';
import { ChatsApi } from '@/api/ChatsApi.ts';
import { handlingErrorStatus } from './handlingErrorStatus.ts';
import { ChatModel, NewChatRequest } from '@/models/chat.ts';
import { ChatUserModel } from '@/models/user.ts';
import messagesController from '@/shared/lib/messagesController/MessagesController.ts';

class ChatsService {
  private _chatsApi = new ChatsApi();

  async getChats() {
    try {
      const chatsRes = await this._chatsApi.getChats();

      if (chatsRes.status === 200) {
        const chats = JSON.parse(chatsRes.response) as ChatModel[];
        store.setState('clientError', null);

        chats.forEach(async (chat) => {
          const tokenRes = await this.getToken(chat.id);

          if (tokenRes) {
            messagesController.connect(chat.id, tokenRes.token);
          }
        });

        store.setState('chats', chats);
      } else {
        handlingErrorStatus(chatsRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async getChatUsers(chatId: number) {
    try {
      const chatsRes = await this._chatsApi.getChatUsers(chatId);

      if (chatsRes.status === 200) {
        const users = JSON.parse(chatsRes.response) as ChatUserModel[];

        if (users) {
          store.setState('clientError', null);
          const currentUser = store.getState()?.user;

          const filterUsers = users.filter(
            (user) => user.id !== currentUser?.id,
          );
          store.setState('chatUsers', filterUsers);
        } else {
          store.setState('clientError', 'В чате нет такого пользователя');
          return;
        }
      } else {
        handlingErrorStatus(chatsRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async createChats(newChat: NewChatRequest) {
    try {
      const chatsRes = await this._chatsApi.createChat(newChat);

      if (chatsRes.status === 200) {
        await this.getChats();
        store.setState('clientError', null);
        return true;
      } else {
        handlingErrorStatus(chatsRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async deleteChat(chatId: number) {
    try {
      const chatsRes = await this._chatsApi.deleteChat(chatId);

      if (chatsRes.status === 200) {
        await this.getChats();
        store.setState('clientError', null);
        store.setState('activeChat', null);
        return true;
      } else {
        handlingErrorStatus(chatsRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async addUserInChat(users: number[], chatId: number) {
    try {
      const chatsRes = await this._chatsApi.addUserInChat(users, chatId);

      if (chatsRes.status === 200) {
        await this.getChatUsers(chatId);
        store.setState('clientError', null);
        return true;
      } else {
        handlingErrorStatus(chatsRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async deleteUserFromChat(users: number[], chatId: number) {
    try {
      if (users) {
        const chatsRes = await this._chatsApi.deleteUserFromChat(users, chatId);

        if (chatsRes.status === 200) {
          await this.getChatUsers(chatId);
          store.setState('clientError', null);
          return true;
        } else {
          handlingErrorStatus(chatsRes);
        }
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }

  async getToken(chatId: number): Promise<{ token: string } | undefined> {
    try {
      const tokenRes = await this._chatsApi.getToken(chatId);

      if (tokenRes.status === 200) {
        return JSON.parse(tokenRes.response);
      } else {
        handlingErrorStatus(tokenRes);
      }
    } catch (e) {
      if (e instanceof Error) {
        store.setState('clientError', e.message);
      }
    }
  }
}

export default new ChatsService();
