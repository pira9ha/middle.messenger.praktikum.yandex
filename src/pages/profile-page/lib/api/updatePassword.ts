import { fromFormData } from '@/shared/lib/utils/fromFormData.ts';
import { UserChangePassword } from '@/models/user.ts';
import userService from '@/service/UserService.ts';

export const updatePassword = async (paswordDate: FormData) => {
  const newPassword = fromFormData<UserChangePassword>(paswordDate);
  await userService.updatePassword(newPassword);
};
