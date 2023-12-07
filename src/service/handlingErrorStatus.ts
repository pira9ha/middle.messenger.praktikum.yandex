import { ErrorResponse } from '@/shared/lib/httpTransport/types.ts';
import { DEFAULT_ERROR } from '@/service/constants.ts';
import store from '@/shared/lib/store/Store.ts';

export const handlingErrorStatus = (response: XMLHttpRequest) => {
  if (response.status < 500) {
    const errorResponse: ErrorResponse = response.response
      ? JSON.parse(response.response)
      : DEFAULT_ERROR;
    store.setState('clientError', errorResponse.reason);
  } else {
    store.setState('serverError', response.status);
  }
};
