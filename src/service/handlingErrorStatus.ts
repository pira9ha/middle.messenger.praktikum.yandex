import { ErrorResponse } from '@/shared/lib/httpTransport/types.ts';
import { DEFAULT_ERROR } from '@/service/constants.ts';
import store from '@/shared/lib/store/Store.ts';
import router from '@/shared/lib/router/Router.ts';
import { Routes } from '@/shared/constants/routes.ts';

export const handlingErrorStatus = (response: XMLHttpRequest) => {
  const errorResponse: ErrorResponse = response.response
    ? JSON.parse(response.response)
    : DEFAULT_ERROR;

  if (response.status >= 500) {
    store.setState('serverError', response.status);
    router.go(Routes.SERVER_ERROR);
    return;
  }

  store.setState('clientError', errorResponse?.reason);

  if (response.status === 401) {
    router.go(Routes.LOGIN);
    return;
  }

  if (errorResponse?.reason === 'User already in system') {
    router.go(Routes.CHATS);
    return;
  }
};
