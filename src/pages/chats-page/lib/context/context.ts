import s from '../../ui/chatPage.module.scss';
import {
  TChatPageContext,
  TOpenedChat,
} from '@/pages/chats-page/lib/types/chat.ts';
import { PROFILE } from '@/pages/profile-page/lib/constants/profile.ts';
import { ButtonVariant } from '@/shared/ui/button';
import {
  arrowRightIcon,
  stapleIcon,
  imageIcon,
  fileIcon,
  locationIcon,
  plusIcon,
  crossIcon,
  errorCrossIcon,
  menuIcon,
  searchIcon,
} from '@/shared/svg';
import { DropdownMenuPlace } from '@/shared/ui/dropdown/lib/types/dropdown.ts';
import { TChatsProps } from '@/widgets/chats/lib/types/chats.ts';

const chats: TChatsProps['chats'] = [
  {
    id: 123,
    userAvatar: {},
    unread_count: 15,
    content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
    isMainMessage: true,
    userName: 'User Name',
    time: new Date().toISOString(),
  },
  {
    id: 2324,
    userAvatar: {},
    unread_count: 1000,
    content:
      'hjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfkls,d',
    isMainMessage: false,
    userName: 'User Name',
    time: new Date(2023, 10, 10).toISOString(),
  },
  {
    id: 24,
    userAvatar: {},
    content:
      'hjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfkls,d',
    isMainMessage: false,
    userName: 'User Name',
    time: new Date(2023, 5, 10).toISOString(),
  },
];

const messages: TOpenedChat['messages'] = [
  {
    id: 1,
    time: '2020-01-02T14:22:22.000Z',
    content: 'this is message content',
    chat_id: 123,
    user_id: 123,
    currentUserId: 12,
  },
  {
    id: 2,
    time: '2020-01-02T14:22:22.000Z',
    content:
      'this is message content this is message content this is message content this is message content this is message content this is message content this is message content',
    chat_id: 123,
    user_id: 123,
    currentUserId: 12,
  },
  {
    id: 3,
    time: '2020-01-02T14:22:22.000Z',
    content: 'this is message content',
    chat_id: 123,
    user_id: 12,
    currentUserId: 12,
    isRead: true,
  },
];

const messageFormContext: TOpenedChat['messageFormContext'] = {
  dropdownAdd: {
    openButton: {
      title: '',
      iconImage: stapleIcon,
      variant: ButtonVariant.ICON,
    },
    menu: {
      place: DropdownMenuPlace.TOP_LEFT,
      options: [
        {
          icon: imageIcon,
          title: 'Фото или Видео',
        },
        {
          icon: fileIcon,
          title: 'Файл',
        },
        {
          icon: locationIcon,
          title: 'Локация',
        },
      ],
    },
  },
  sendButton: {
    title: '',
    type: 'submit',
    variant: ButtonVariant.ICON,
    iconImage: arrowRightIcon,
  },
  input: {
    name: 'message',
    placeholder: 'Сообщение',
  },
};

const chatContext: TOpenedChat['chatContext'] = {
  menu: {
    openButton: {
      title: '',
      iconImage: menuIcon,
      variant: ButtonVariant.ICON,
    },
    menu: {
      place: DropdownMenuPlace.BOTTOM_RIGHT,
      options: [
        {
          icon: plusIcon,
          title: 'Добавить пользователя',
        },
        {
          icon: crossIcon,
          title: 'Удалить пользователя',
        },
        {
          icon: errorCrossIcon,
          title: 'Удалить переписку',
        },
      ],
    },
  },
  avatar: {
    alt: 'user avatar',
  },
  userName: 'Vasua Pupkin',
};

export const context = (): TChatPageContext => {
  const params = window.location.search;
  const paramsFields = new URLSearchParams(params);

  const pageContext: TChatPageContext = {
    chatsContext: {
      chats: {
        chats,
      },
      link: {
        path: PROFILE,
        title: 'Мой профиль',
        className: s.chatsLink,
      },
      searchInput: {
        input: {
          placeholder: 'Поиск',
          name: 'search',
          className: s.searchInput,
        },
        label: {
          labelText: '',
          for: 'search',
        },
        icon: searchIcon,
        iconStyle: s.searchIcon,
      },
    },
  };

  for (const [key, value] of paramsFields.entries()) {
    if (key === 'chat') {
      pageContext.chat = {
        messageFormContext,
        chatContext,
        messages,
      };

      pageContext.chatsContext.chats.chats =
        pageContext.chatsContext.chats.chats.map((chat) => {
          if (chat.id === Number(value)) {
            return { ...chat, isActive: true };
          }
          return chat;
        });
    }
  }

  return pageContext;
};
