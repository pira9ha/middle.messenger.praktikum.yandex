import { TAvatarProps } from '@/shared/ui/chatAvatar/lib/types/avatar.ts';
import { ChatAvatar } from 'src/shared/ui/chatAvatar';
import { Chat } from '../../ui/components/Chat.ts';

export type TChatContext = {
  id: number;
  content: string;
  userName: string;
  isMainMessage?: boolean;
  unread_count?: number;
  time: string;
  isActive?: boolean;
  userAvatar: TAvatarProps;
};

export type TChatsProps = {
  chats: Array<TChatContext>;
};

export type TChatChildren = {
  avatar: ChatAvatar;
};

export type TChatsChildren = {
  chats: Chat;
};
