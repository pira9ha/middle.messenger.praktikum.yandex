import { Fields } from './constants.ts';
import {
  validateEmail,
  validateLogin,
  validateMessage,
  validateNames,
  validateNumber,
  validatePassword,
  validatePasswordCheck,
} from './validation.ts';

export const getValidation = (fieldName: Fields) => {
  switch (fieldName) {
    case Fields.EMAIL: {
      return validateEmail;
    }
    case Fields.LOGIN: {
      return validateLogin;
    }
    case Fields.NAME: {
      return validateNames;
    }
    case Fields.PHONE: {
      return validateNumber;
    }
    case Fields.PASSWORD: {
      return validatePassword;
    }
    case Fields.PASSWORD_CHECK: {
      return validatePasswordCheck;
    }
    default: {
      return validateMessage;
    }
  }
};
