import { ChatModel, MessageModel } from '@/models/chat.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { MessageForm } from '@/widgets/messageForm';
import { ChatAvatar } from 'src/shared/ui/chatAvatar';
import { Dropdown } from '@/shared/ui/dropdown';
import { Header } from '../../ui/components/header/Header.ts';
import { Chats } from '@/widgets/chats';
import { ChatContent } from '../../ui/components/chatContent/ChatContent.ts';
import { Message } from '@/features/message';
import { Aside } from '@/pages/chats-page/ui/components/aside/Aside.ts';
import { Button } from '@/shared/ui/button';
import { OpenedChat } from '@/pages/chats-page/ui/components/openedChat/OpenedChat.ts';
import { TDefaultProps } from '@/shared/lib/component/componentTypes.ts';
import { UserModel } from '@/models/user.ts';

export type TChatPageContext = {
  chatsContext: TAsideProps;
  chat?: TOpenedChat;
};

export type TOpenedChat = {
  messages: MessageModel[];
};

export type TChatPageChildren = {
  chats: Aside;
  chat: ChatContent;
};

export type TAsideChildren = {
  chats: Chats;
  link: Link;
  searchInput: InputField;
  createChat: Button;
};

export type TAsideProps = {
  link: TLinkProps;
  searchInput: TInputFieldProps;
};

export type ChatChildren = {
  messageForm?: MessageForm | undefined;
  header?: Header;
  messages?: Message[];
};

export type ChatContentChildren = {
  chat: OpenedChat;
};

export type AddUserFormProps = {
  searchedUsers: UserModel[];
  selectedUsers: UserModel[];
} & TDefaultProps;

export type AddUserFormChildren = {
  loginSearch: InputField;
  sendButton: Button;
};

export type ChatContentProps = {
  isChatOpen: boolean;
  chat?: number;
} & TDefaultProps;

export type HeaderProps = {
  chat?: ChatModel;
  activeChat?: number;
  chatName?: string;
} & TDefaultProps;

export type THeaderChildren = {
  avatar: ChatAvatar;
  dropdownMenu: Dropdown;
};
