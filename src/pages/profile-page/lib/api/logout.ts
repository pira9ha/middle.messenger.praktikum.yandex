import authService from '@/service/AuthService.ts';

export const logout = async () => {
  await authService.logOut();
};
