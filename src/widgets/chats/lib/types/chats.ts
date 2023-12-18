import { ChatAvatar } from 'src/shared/ui/chatAvatar';
import { Chat } from '../../ui/components/Chat.ts';
import { ChatModel } from '@/models/chat.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export type TChatContext = ChatModel;

export type ChatProps = {
  isMainMessage?: boolean;
  activeChat?: number;
  chatId: ChatModel['id'];
  date: string;
} & TChatContext &
  TDefaultProps;

export type TChatsProps = {
  chats: Array<TChatContext>;
};

export type TChatChildren = {
  avatar: ChatAvatar;
};

export type TChatsChildren = {
  chats: Chat[];
};
