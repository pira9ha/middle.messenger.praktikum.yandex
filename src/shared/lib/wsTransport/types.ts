import { UserModel } from '@/models/user';
import { ChatModel } from '@/models/chat.ts';

export type WSTransportProps = {
  userId: UserModel['id'];
  chatId: ChatModel['id'];
  token: string;
};

export type WSMessage = {
  type: string;
  content?: string;
};
