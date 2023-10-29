import {IAvatarProps} from "@/features/chatAvatar/lib/types/avatar.ts";


export type TChatContext = {
    id: number;
    userAvatar: IAvatarProps;
    content: string;
    userName: string;
    isMainMessage?: boolean;
    unread_count?: number;
    time: string;
    isActive?: boolean;
}

export type IChatsProps = {
    chats: Array<TChatContext>;
}