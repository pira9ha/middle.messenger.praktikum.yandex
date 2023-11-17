export interface IUser {
  id?: number;
  first_name: string;
  second_name: string;
  display_name?: string;
  phone: string;
  login: string;
  avatar?: string;
  email: string;
}

export interface IUserLogin {
  login: string;
  password: string;
}

export interface IUserRegistration extends IUser {
  password: string;
  password_check: string;
}

export type TUserChangePassword = {
  oldPassword: string;
  newPassword: string;
  passwordCheck: string;
};
