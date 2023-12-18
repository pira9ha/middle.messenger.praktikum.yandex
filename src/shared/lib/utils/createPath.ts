import { API_DEFAULT_PATH } from '@/shared/constants/api.ts';
import { DEFAULT_AVATAR } from '@/shared/constants/avatar.ts';
import { State } from '@/shared/lib/store/types.ts';

export const createPath = (avatar?: State | string | null) => {
  let path;
  if (typeof avatar === 'string') {
    path = avatar;
  } else {
    path = avatar?.user?.avatar ?? avatar;
  }
  return API_DEFAULT_PATH + '/resources' + (path ?? DEFAULT_AVATAR);
};
