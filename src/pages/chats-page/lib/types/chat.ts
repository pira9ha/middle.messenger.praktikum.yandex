import { IMessage } from '@/models/chat.ts';
import { Link, TLinkProps } from '@/shared/ui/link';
import { InputField, TInputFieldProps } from '@/shared/ui/inputField';
import { TMessageFormProps } from '@/widgets/messageForm/lib/types/messageForm.ts';
import { MessageForm } from '@/widgets/messageForm';
import { ChatAvatar } from 'src/shared/ui/chatAvatar';
import { Dropdown, TDropdown } from '@/shared/ui/dropdown';
import { TAvatarProps } from '@/shared/ui/chatAvatar/lib/types/avatar.ts';
import { Header } from '../../ui/components/header/Header.ts';
import { TChatsProps } from '@/widgets/chats/lib/types/chats.ts';
import { Chats } from '@/widgets/chats';
import { ChatContent } from '../../ui/components/chatContent/ChatContent.ts';
import { Message } from '@/features/message';
import { Aside } from '@/pages/chats-page/ui/components/aside/Aside.ts';

export type TChatPageContext = {
  chatsContext: TAsideProps;
  chat?: TOpenedChat;
};

export type TOpenedChat = {
  chatContext: THeader;
  messageFormContext: TMessageFormProps;
  messages: IMessage[];
};

export type TChatPageChildren = {
  chats: Aside;
  chat: ChatContent;
};

export type TAsideChildren = {
  chats: Chats;
  link: Link;
  searchInput: InputField;
};

export type TAsideProps = {
  chats: TChatsProps;
  link: TLinkProps;
  searchInput: TInputFieldProps;
};

export type TChatContentChildren = {
  messageForm?: MessageForm | undefined;
  header?: Header;
  messages: Message[];
};

export type THeader = {
  menu: TDropdown;
  avatar: TAvatarProps;
  userName: string;
};

export type THeaderChildren = {
  avatar: ChatAvatar;
  dropdownMenu: Dropdown;
};
