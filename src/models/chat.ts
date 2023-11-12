export interface IChats {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: TLastMessage;
}

export type TLastMessage = {
  user: IChatUser;
  time: string;
  content: IMessage;
};

export interface IChatUser {
  first_name: string;
  second_name: string;
  avatar: string;
  email: string;
  login: string;
  phone: string;
}

export interface IMessage {
  id: number;
  user_id: number;
  chat_id: number;
  time: string;
  content: string;
  isMainMessage?: boolean;
  currentUserId?: number;
  isRead?: boolean;
}

export type TFile = {
  id: number;
  user_id: number;
  path: string;
  filename: string;
  content_type: string;
  content_size: number;
  upload_date: string;
};
