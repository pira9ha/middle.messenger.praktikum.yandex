import { THeaders, TRequest, METHODS, TFullRequest } from './types.ts';

function queryStringify(data: unknown) {
  const res = [];

  if (data) {
    for (const [key, value] of Object.entries(data)) {
      if (Array.isArray(value) || typeof value === 'object') {
        res.push(`${key}=${value?.toString()}`);
      } else {
        res.push(`${key}=${value}`);
      }
    }
  }

  return `?${res.join('&')}`;
}

function setHeaders(xhr: XMLHttpRequest, headers: THeaders) {
  for (const [key, value] of Object.entries(headers)) {
    xhr.setRequestHeader(key, value);
  }
}

export class HTTPTransport {
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
        res(xhr.response);
      };

      xhr.timeout = timeout;
      xhr.onerror = () => rej(new Error('Что-то пошло не так'));
      xhr.onabort = () => rej(new Error('Запрос прервался'));
      xhr.ontimeout = () => rej(new Error('Время ожидания истекло'));

      if (options.method === METHODS.GET || !options.data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(options?.data));
      }
    });
  };

  GET: TRequest = (url, options = {}) => {
    const newUrl = url + options.data ? queryStringify(options.data) : '';
    return this.request(
      newUrl,
      { ...options, method: METHODS.GET },
      options?.timeout,
    );
  };
  PUT: TRequest = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options?.timeout,
    );
  };
  POST: TRequest = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options?.timeout,
    );
  };
  DELETE: TRequest = (url, options = {}) => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options?.timeout,
    );
  };
}
