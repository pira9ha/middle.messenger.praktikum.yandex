import { ErrorResponse } from '@/shared/lib/httpTransport/types.ts';
import { DEFAULT_ERROR } from '@/service/constants.ts';
import store from '@/shared/lib/store/Store.ts';
import router from '@/shared/lib/router/Router.ts';
import { Routes } from '@/shared/constants/routes.ts';

export const handlingErrorStatus = (response: XMLHttpRequest) => {
  if (response.status < 500) {
    const errorResponse: ErrorResponse = response.response
      ? JSON.parse(response.response)
      : DEFAULT_ERROR;
    store.setState('clientError', errorResponse.reason);
  } else if (response.status === 401) {
    router.go(Routes.LOGIN);
  } else {
    store.setState('serverError', response.status);
    router.go(Routes.SERVER_ERROR);
  }
};
