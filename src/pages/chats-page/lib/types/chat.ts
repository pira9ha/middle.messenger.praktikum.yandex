import { IMessage } from '@/models/chat.ts';
import { TLinkProps } from '@/shared/ui/link/Link.ts';
import { IInputProps } from '@/shared/ui/input/Input.ts';
import { IChatsProps } from '@/widgets/chats/lib/types/chats.ts';
import { TMessageInputProps } from '@/widgets/messageInput/lib/types/messageInput.ts';

export type TChatUserContext = {
    avatar?: string;
    userName: string;
}

export type TChatPageContext = {
    chatsContext: IChatsProps;
    linkContext: TLinkProps;
    inputContext: IInputProps;
    isChatOpen: boolean;
    chatContext?: TChatUserContext;
    messagesContext?: IMessage[];
    messageInputContext?: TMessageInputProps;
}
