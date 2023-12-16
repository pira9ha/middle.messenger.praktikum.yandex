// import { TAvatarProps } from '@/shared/ui/chatAvatar/lib/types/avatar.ts';
import { ChatAvatar } from 'src/shared/ui/chatAvatar';
import { Chat } from '../../ui/components/Chat.ts';
import { ChatModel } from '@/models/chat.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';

export type TChatContext = ChatModel;

export type ChatProps = {
  activeChat?: number;
  chatId: ChatModel['id'];
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
