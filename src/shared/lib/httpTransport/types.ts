export enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export type TRequest<
  P extends Record<string, unknown> = Record<string, unknown>,
> = (url: string, options: TOptions<P>) => Promise<XMLHttpRequest>;

export type TFullRequest<
  P extends Record<string, unknown> = Record<string, unknown>,
> = (
  url: string,
  options: TRequestOptions<P>,
  timeout?: number,
) => Promise<XMLHttpRequest>;

export type THeaders = Record<string, string>;

export type TOptions<T> = {
  data?: T;
  headers?: THeaders;
  timeout?: number;
};

export type TRequestOptions<T> = {
  data?: T;
  headers?: THeaders;
  timeout?: number;
  method: METHODS;
};
