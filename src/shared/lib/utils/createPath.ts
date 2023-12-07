import { DEFAULT_PATH } from '@/shared/constants/api.ts';
import { DEFAULT_AVATAR } from '@/shared/constants/avatar.ts';
import { State } from '@/shared/lib/store/types.ts';

export const createPath = (avatar?: State | string) => {
  // debugger;
  let path;
  if (typeof avatar === 'string') {
    path = avatar;
  } else {
    path = avatar?.user?.avatar ?? avatar;
  }
  return DEFAULT_PATH + '/resources' + (path ?? DEFAULT_AVATAR);
};
