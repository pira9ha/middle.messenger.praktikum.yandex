import { THeaders, TRequest, METHODS, TFullRequest } from './types.ts';
import { queryStringify } from '@/shared/lib/utils/queryStringify.ts';
import { DEFAULT_PATH } from '@/shared/constants/api.ts';

function setHeaders(xhr: XMLHttpRequest, headers: THeaders) {
  for (const [key, value] of Object.entries(headers)) {
    xhr.setRequestHeader(key, String(value));
  }
}

export class HTTPTransport {
  private _baseURL: string = DEFAULT_PATH;
  private _path: string;

  constructor(path: string) {
    this._path = `${this._baseURL}${path}`;
  }

  request: TFullRequest = (url, options, timeout = 5000) => {
    const { headers = {}, method } = options;
    return new Promise((res, rej) => {
      if (!method) {
        rej(new Error('Нет метода запроса'));
        return;
      }

      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      setHeaders(xhr, headers);

      xhr.onload = () => {
        res(xhr);
      };

      xhr.withCredentials = true;
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.timeout = timeout;
      xhr.onerror = () => rej(new Error('Что-то пошло не так'));
      xhr.onabort = () => rej(new Error('Запрос прервался'));
      xhr.ontimeout = () => rej(new Error('Время ожидания истекло'));

      if (options.method === METHODS.GET || !options.data) {
        xhr.send();
      } else {
        xhr.send(
          options?.data instanceof FormData
            ? options?.data
            : JSON.stringify(options?.data),
        );
      }
    });
  };

  GET: TRequest = (url, options = {}) => {
    const newUrl =
      this._path +
      url +
      (options.data ? '?' + queryStringify(options?.data) : '');
    return this.request(
      newUrl,
      { ...options, method: METHODS.GET },
      options?.timeout,
    );
  };
  PUT: TRequest = (url, options = {}) => {
    return this.request(
      this._path + url,
      { ...options, method: METHODS.PUT },
      options?.timeout,
    );
  };
  POST: TRequest = (url, options = {}) => {
    return this.request(
      this._path + url,
      { ...options, method: METHODS.POST },
      options?.timeout,
    );
  };
  DELETE: TRequest = (url, options = {}) => {
    return this.request(
      this._path + url,
      { ...options, method: METHODS.DELETE },
      options?.timeout,
    );
  };
}
