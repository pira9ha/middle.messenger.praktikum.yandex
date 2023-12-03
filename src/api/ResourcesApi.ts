import { BaseAPI } from '@/api/BaseApi.ts';

export class ResourcesApi extends BaseAPI {
  constructor() {
    super('/resources');
  }

  async loadResource(path: string) {
    return this.http.POST(path);
  }
}
