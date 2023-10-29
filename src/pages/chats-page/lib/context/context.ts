import s from '../../ui/chatPage.module.scss';
import {TChatPageContext} from "@/pages/chats-page/lib/types/chat.ts";
import {convertDate} from "@/shared/utils/convertDate.ts";
import {PROFILE} from "@/pages/profile-page/lib/constants/profile.ts";
import {ButtonVariant} from "@/shared/ui/button/Button.ts";

const chats = [
    {
        id: 123,
        userAvatar: {},
        unread_count: 15,
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        unread_count: 30,
        content: 'hjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: '2023-10-28T23:12:58.972Z',
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        unread_count: 2,
        content: 'hjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfklshjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2023-10-25T23:12:58.972Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: '2025-05-08T21:00:00.000Z',
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2023-10-28T23:15:03.757Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'jdwhs,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'dnmsn,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'sdm,,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        unread_count: 15,
        content: '3e,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        unread_count: 1,
        content: 'text text',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: new Date(2023, 9, 30),
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
    {
        id: 123,
        userAvatar: {},
        content: 'hjfhsjbdmsbmdbwjkergjkwehfkls,d',
        isMainMessage: false,
        userName: 'User Name',
        time: convertDate({
            date: "2020-01-02T14:22:22.000Z",
            format: "full"
        }),
    },
];
export const context = (): TChatPageContext => {
    const params = window.location.search;
    const paramsFields = new URLSearchParams(params);

    const pageContext: TChatPageContext = {
        chatsContext: {
            chats,
        },
        linkContext: {
            path: PROFILE,
            title: 'Мой профиль',
            className: s.chatsLink,
        },
        inputContext: {
            placeholder: 'Поиск',
            name: 'search',
            labelText: '',
            className: s.searchInput,
            icon: s.searchIcon,
        },
    };

    for (let key of paramsFields.keys()) {
        if (key === 'chat') {
            pageContext.chatContext = {
                userName: 'User',
            };
            pageContext.messagesContext = [
                {
                    "id": 1,
                    "time": convertDate({ date: "2020-01-02T14:22:22.000Z" }),
                    "content": "this is message content",
                    chat_id: 123,
                    user_id: 123,
                    currentUserId: 12,
                },
                {
                    "id": 2,
                    "time": convertDate({ date: "2020-01-02T14:22:22.000Z" }),
                    "content": "this is message content this is message content this is message content this is message content this is message content this is message content this is message content",
                    chat_id: 123,
                    user_id: 123,
                    currentUserId: 12,
                },
                {
                    "id": 3,
                    "time": convertDate({ date: "2020-01-02T14:22:22.000Z" }),
                    "content": "this is message content",
                    chat_id: 123,
                    user_id: 12,
                    currentUserId: 12,
                },
            ];
            pageContext.fileButton = {
                title: '',
                variant: ButtonVariant.ICON,
                className: s.fileButton,
            };
            pageContext.sendButton = {
                title: '',
                variant: ButtonVariant.ICON,
                className: s.sendButton,
            };
        }
    }

    return pageContext;
}