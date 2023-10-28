import {TErrorPageContext} from "@/models/errorContext.ts";
import s from '../../ui/serverErrorPage.module.scss';

export const context: TErrorPageContext = {
    errorCode: 500,
    title: 'Мы уже фиксим',
    link: {
        title: 'Назад',
        path: '/chats',
        className: s.link,
    },
};