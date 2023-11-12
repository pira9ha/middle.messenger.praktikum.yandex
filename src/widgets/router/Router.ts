import {
  LoginPage,
  MainPage,
  NotFoundPage,
  ServerErrorPage,
  SigninPage,
  ProfilePage,
  ChatsPage,
} from '@/pages';
import { DeleteChatModal } from '@/widgets/delete-chat-modal/DeleteChatModal.ts';
import { CreateOrDeleteUserModal } from '@/widgets/create-or-delete-user-modal/CreateOrDeleteUserModal.ts';
import {
  PROFILE,
  PROFILE_EDIT,
  PROFILE_PASSWORD_EDIT,
} from '@/pages/profile-page/lib/constants/profile.ts';
import Component from '@/shared/lib/component/Component.ts';

export const Router = (rootElement: Element) => {
  const currentPath = window.location.pathname;

  const pages: Record<string, () => string | Component> = {
    '/': MainPage,
    '/login': LoginPage,
    '/signin': SigninPage,
    '/server-errors': ServerErrorPage,
    '/modal-delete-chat': DeleteChatModal,
    '/modal-create-user': () => CreateOrDeleteUserModal({ isDelete: false }),
    '/modal-delete-user': () => CreateOrDeleteUserModal({ isDelete: true }),
    [PROFILE]: ProfilePage,
    [PROFILE_EDIT]: ProfilePage,
    [PROFILE_PASSWORD_EDIT]: ProfilePage,
    '/chats': ChatsPage,
  };

  const currentPage = pages[currentPath]() ?? NotFoundPage;

  if (currentPage instanceof Component) {
    const page = currentPage.getContent();

    if (page) {
      rootElement.appendChild(page);
    } else {
      throw new Error('Page element not exist');
    }
  } else {
    rootElement.innerHTML = currentPage;
  }
};
