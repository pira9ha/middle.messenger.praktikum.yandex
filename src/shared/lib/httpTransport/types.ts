export enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export type TRequest<
  P extends Record<string, unknown> = Record<string, unknown>,
> = (
  url: string,
  options?: Omit<TRequestOptions<P>, 'method'>,
) => Promise<XMLHttpRequest>;

export type TFullRequest<
  P extends Record<string, unknown> = Record<string, unknown>,
> = (
  url: string,
  options: TRequestOptions<P>,
  timeout?: number,
) => Promise<XMLHttpRequest>;

export type THeaders = Record<string | symbol, string | boolean>;

export type TRequestOptions<T> = {
  data?: T | FormData;
  headers?: THeaders;
  timeout?: number;
  method: METHODS;
};

export type ErrorResponse = {
  reason?: string;
};
