import { UserModel } from '@/models/user.ts';

export type ChatModel = {
  id: number;
  title: string;
  avatar: string | null;
  unread_count: number;
  last_message: TLastMessage | null;
  time: number;
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

export enum MessageVariant {
  TEXT = 'message',
  FILE = 'file',
}

export type MessageModel = {
  id: number;
  user_id: number;
  chat_id: number;
  time: string;
  type: MessageVariant;
  content: string;
  is_read?: boolean;
  file?: {
    content_size: number;
    content_type: string;
    filename: string;
    id: number;
    path: string;
    upload_date: string;
    user_id: number;
  };
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
