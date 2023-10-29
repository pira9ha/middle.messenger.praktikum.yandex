export interface IChatUser {
    first_name: string;
    second_name: string;
    avatar: string;
    email: string;
    login: string;
    phone: string;
}

export interface IMessage {
    id:	number;
    user_id: number;
    chat_id: number;
    time: string;
    content: string;
    isMainMessage?: boolean;
    currentUserId?: number;
}