import store from '@/shared/lib/store/Store.ts';
import { ChatModel } from '@/models/chat.ts';

export const activeChatProps = (activeChat?: number): ChatModel | undefined => {
  const state = store.getState();
  const chatId = activeChat ?? state?.activeChat;
  let openedChat: ChatModel | undefined;

  if (state?.chats && chatId) {
    const { chats } = state;
    openedChat = chats?.find((chat) => chat.id === chatId);
  }

  return openedChat;
};
