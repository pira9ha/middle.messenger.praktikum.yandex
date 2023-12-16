import { UserModel } from '@/models/user.ts';

export type ChatModel = {
  id: number;
  title: string;
  avatar: string | null;
  unread_count: number;
  last_message: TLastMessage | null;
  created_by: number;
};

export type TLastMessage = {
  user: UserModel;
  time: string;
  content: MessageModel;
};

export type NewChatRequest = {
  title: string;
};

export interface IChatUser {
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}

export type MessageModel = {
  id: number;
  user_id: number;
  chat_id: number;
  time: string;
  content: string;
  isMainMessage?: boolean;
  currentUserId?: number;
  isRead?: boolean;
};

export type TFile = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
};
