import { WSTransport } from '@/shared/lib/wsTransport/WSTransport.ts';
import store from '@/shared/lib/store/Store.ts';
import chatsService from '@/service/ChatsService.ts';
import { MessageModel } from '@/models/chat.ts';

class MessagesController {
  private _wsTransports: Map<number, WSTransport> = new Map();

  async connect(chatId: number, token: string) {
    if (this._wsTransports.has(chatId)) {
      return;
    }

    const { user } = store.getState();

    if (user) {
      const currentTransport = new WSTransport({
        userId: user?.id,
        token,
        chatId,
      });
      this._wsTransports.set(chatId, currentTransport);
      await currentTransport.connect();

      this.subscribe(chatId);
    }
  }

  sendMessage(chatId: number, message: string) {
    const currentTransport = this._checkConnection(chatId);
    currentTransport.send(message);
  }

  updateChatHistory(chatId: number, content: number = 0) {
    const currentTransport = this._checkConnection(chatId);

    currentTransport.send({
      type: 'get old',
      content: content.toString(),
    });
  }

  exchangeMessages(chatId: number, messages: MessageModel | MessageModel[]) {
    const incomingMessages = Array.isArray(messages) ? messages : [messages];
    const state = store.getState();
    let currentMessages: any[] = [];

    if (state?.messages) {
      currentMessages = state?.messages?.[chatId] ?? [];
    }

    store.setState(`messages.${chatId}`, [
      ...currentMessages,
      ...incomingMessages.reverse(),
    ]);

    chatsService.getChats();
  }

  subscribe(chatId: number) {
    const currentTransport = this._checkConnection(chatId);
    currentTransport.on(WSTransport.EVENTS.MESSAGE, (data) => {
      this.exchangeMessages(chatId, data);
    });
  }

  _checkConnection(chatId: number) {
    const currentTransport = this._wsTransports.get(chatId);

    if (!currentTransport) {
      throw new Error(`Соединение с чатом ${chatId} не подключено`);
    }

    return currentTransport;
  }
}

export default new MessagesController();
