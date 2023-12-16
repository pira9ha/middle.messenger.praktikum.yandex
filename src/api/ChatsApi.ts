import { BaseAPI } from '@/api/BaseApi.ts';
import { NewChatRequest } from '@/models/chat.ts';

export class ChatsApi extends BaseAPI {
  constructor() {
    super('/chats');
  }

  async getChats() {
    return this.http.GET('', {});
  }

  async deleteChat(chatId: number) {
    return this.http.DELETE('', {
      data: {
        chatId,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async addUserInChat(users: number[], chatId: number) {
    return this.http.PUT('/users', {
      data: {
        users,
        chatId,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async deleteUserFromChat(users: number[], chatId: number) {
    return this.http.DELETE('/users', {
      data: {
        users,
        chatId,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async createChat(data: NewChatRequest) {
    return this.http.POST('', {
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getChatUsers(chatId: number) {
    return this.http.GET(`/${chatId}/users`, {});
  }

  async getToken(chatId: number) {
    return this.http.POST(`/token/${chatId}`, {
      data: {
        id: chatId,
      },
    });
  }
}
