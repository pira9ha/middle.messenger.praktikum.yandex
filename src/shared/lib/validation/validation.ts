import {
  EMAIL_PATTERN,
  ERRORS,
  LOGIN_PATTERN,
  NAMES_PATTERN,
  NUMBERS_PATTERN,
  PHONE_PATTERN,
  UPPERS_PATTERN,
} from './constants.ts';

export const validatePassword = (element: HTMLInputElement) => {
  if (!element.value.length) {
    return ERRORS.empty;
  }
  if (element.value.length < 8 || element.value.length > 40) {
    return ERRORS.passwordLength;
  }
  if (
    !UPPERS_PATTERN.test(element.value) &&
    !NUMBERS_PATTERN.test(element.value)
  ) {
    return ERRORS.password;
  }
};

export const validateMessage = (element: HTMLInputElement) => {
  if (!element.value.length) {
    return ERRORS.empty;
  }
};

export const validateNames = (element: HTMLInputElement) => {
  if (!element.value.length) {
    return ERRORS.empty;
  }
  if (!NAMES_PATTERN.test(element.value)) {
    return ERRORS.symbols;
  }
};

export const validateLogin = (element: HTMLInputElement) => {
  if (!element.value.length) {
    return ERRORS.empty;
  }
  if (element.value.length < 3 || element.value.length > 20) {
    return ERRORS.length;
  }
  if (NUMBERS_PATTERN.test(element.value)) {
    return ERRORS.login;
  }
  if (!LOGIN_PATTERN.test(element.value)) {
    return ERRORS.symbols;
  }
};

export const validateNumber = (element: HTMLInputElement) => {
  if (!element.value.length) {
    return ERRORS.empty;
  }
  if (element.value.length < 10 || element.value.length > 15) {
    return ERRORS.phone;
  }
  if (!PHONE_PATTERN.test(element.value)) {
    return ERRORS.symbols;
  }
};

export const validateEmail = (element: HTMLInputElement) => {
  if (!element.value.length) {
    return ERRORS.empty;
  }
  if (!EMAIL_PATTERN.test(element.value)) {
    return ERRORS.email;
  }
};
