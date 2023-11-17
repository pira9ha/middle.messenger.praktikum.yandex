import { TErrorPageContext } from '@/models/errorContext.ts';
import s from '../../ui/serverErrorPage.module.scss';

export const context: TErrorPageContext = {
  statusError: {
    errorCode: 500,
    title: 'Мы уже фиксим',
  },
  link: {
    title: 'Назад',
    classNames: s.link,
    isBackButton: true,
  },
};
