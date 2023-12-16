export type UserModel = {
  id?: number;
  first_name: string;
  second_name: string;
  display_name?: string;
  phone: string;
  login: string;
  avatar?: string;
  email: string;
};

export type UserLogin = Pick<UserRegistration, 'login' | 'password'>;

export type UserRegistration = {
  password: string;
  password_check: string;
} & UserModel;

export type UserChangePassword = {
  oldPassword: string;
  newPassword: string;
  passwordCheck: string;
};

export type UserLoginSearch = Pick<UserModel, 'login'>;

export type ChatUserModel = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  avatar: string;
  role: string;
};
