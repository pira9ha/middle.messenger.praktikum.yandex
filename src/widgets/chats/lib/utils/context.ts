import { TChatContext, TChatsProps } from '../types/chats.ts';
import store from '@/shared/lib/store/Store.ts';

export const chatsContext = (): TChatsProps => {
  const state = store.getState();
  const chats: Array<TChatContext> = [...(state?.chats ?? [])];

  return {
    chats,
  };
};
