import { DEFAULT_PATH } from '@/shared/constants/api.ts';
import { DEFAULT_AVATAR } from '@/shared/constants/avatar.ts';

export const createPath = (path?: string) => {
  return DEFAULT_PATH + '/resources' + (path ?? DEFAULT_AVATAR);
};
