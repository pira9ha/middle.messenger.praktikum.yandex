import {IMessage} from "@/models/chat.ts";
import {IAvatarProps} from "@/features/chatAvatar/lib/types/avatar.ts";
import {TLinkProps} from "@/shared/ui/link/Link.ts";
import {IInputProps} from "@/shared/ui/input/Input.ts";
import {IButtonProps} from "@/shared/ui/button/Button.ts";

export type TChatProps = {
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
    chats: Array<TChatProps>;
}
export type TChatUserContext = {
    avatar?: string;
    userName: string;
}

export type TChatPageContext = {
    chatsContext: IChatsProps;
    linkContext: TLinkProps;
    inputContext: IInputProps;
    chatContext?: TChatUserContext;
    fileButton?: IButtonProps;
    sendButton?: IButtonProps;
    messagesContext?: IMessage[];
}
