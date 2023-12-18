import { isObject } from './isObject.ts';
import { Indexed } from './types.ts';

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
  for (const p in rhs) {
    if (!rhs?.hasOwnProperty.call(rhs, p)) {
      continue;
    }
    try {
      if (rhs[p] && isObject(rhs[p])) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
};
