import { TErrorPageContext } from '@/models/errorContext.ts';
import s from '../../ui/notFoundPage.module.scss';

export const context: TErrorPageContext = {
  statusError: {
    errorCode: 404,
    title: 'Не туда попали',
  },
  link: {
    title: 'Назад',
    classNames: s.link,
    isBackButton: true,
  },
};
