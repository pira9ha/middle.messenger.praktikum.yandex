import {LoginPage, MainPage, NotFoundPage, ServerErrorPage, SigninPage} from "@/pages";
import {ProfilePage} from "@/pages/profile-page/ui/ProfilePage.ts";
import {DeleteChatModal} from "@/widgets/delete-chat-modal/DeleteChatModal.ts";
import {CreateOrDeleteUserModal} from "@/widgets/create-or-delete-user-modal/CreateOrDeleteUserModal.ts";
import {PROFILE, PROFILE_EDIT, PROFILE_PASSWORD_EDIT} from "@/pages/profile-page/lib/constants/profile.ts";


export const Router = (rootElement: Element) => {
    const currentPath = window.location.pathname;

    const pages: Record<string, () => string> = {
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
    };
    const currentPage = pages[currentPath] ?? NotFoundPage;

    rootElement.innerHTML = currentPage();
};
