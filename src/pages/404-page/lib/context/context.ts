import {TErrorPageContext} from "@/models/errorContext.ts";
import s from '../../ui/notFoundPage.module.scss';

export const context: TErrorPageContext = {
    errorCode: 404,
    title: 'Не туда попали',
    link: {
        title: 'Назад',
        path: '/chats',
        className: s.link,
    },
};