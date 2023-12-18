import { HTTPTransport } from '@/shared/lib/httpTransport/HTTPTransport.ts';

export class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(path: string) {
    this.http = new HTTPTransport(path);
  }
}
