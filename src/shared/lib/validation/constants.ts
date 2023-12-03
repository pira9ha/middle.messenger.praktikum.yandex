export const EMAIL_PATTERN =
  /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]$/;
export const PHONE_PATTERN = /^[+]?[0-9]{10,15}$/;
export const NUMBERS_PATTERN = /^[0-9]+$/;
export const UPPERS_PATTERN = /[A-Z]/;
export const LOGIN_PATTERN = /^[a-zA-Z0-9_-]+$/;
export const NAMES_PATTERN = /^[A-ZА-ЯЁ][a-za-яё-]+$/;

export const ERRORS = {
  empty: 'Поле не должно быть пустым',
  email: 'Некорректный email адрес',
  symbols: 'Используются запрещенные символы',
  firstLetter: 'Первая буква должна быть заглавной',
  length: 'Логин должен быть длиной от 3 до 20 символов',
  login: 'В логине должна быть хотя бы одна буква',
  passwordLength: 'Пароль должен быть длиной от 8 до 40 символов',
  password: 'Обязательно хотя бы одна заглавная буква и цифра',
  passwordCheck: 'Пароли не совпадают',
  phone: 'Телефон должен быть длиной от 10 до 15',
};

export enum Fields {
  EMAIL,
  PHONE,
  MESSAGE,
  PASSWORD,
  NAME,
  LOGIN,
  PASSWORD_CHECK,
}
