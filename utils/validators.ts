import * as Yup from 'yup';
import { VALIDATORS, MESSAGES } from '@/common/constants';
import { PreviewTypes } from '@/components/Entry/ForgotPassword/types';

const Schema = {
  EMAIL_AND_PASSWORD_SCHEME: {
    email: Yup.string().required(MESSAGES.VALIDATIONS.EMAIL_IS_REQUIRED).email(MESSAGES.VALIDATIONS.EMAIL_EXAMPLE).max(VALIDATORS.EMAIL.max),
    password: Yup.string()
      .required(MESSAGES.VALIDATIONS.PASSWORD_IS_NOT_BE_EMPTY)
      .min(VALIDATORS.PASSWORD.min, MESSAGES.VALIDATIONS.PASSWORD_HAS_MIN)
      .max(VALIDATORS.PASSWORD.max, MESSAGES.VALIDATIONS.PASSWORD_HAS_MAX)
      .matches(VALIDATORS.PASSWORD.passwordAZ, MESSAGES.VALIDATIONS.PASSWORD_ONLY_LATIN_CHARACTERS)
      .matches(VALIDATORS.PASSWORD.symbolPattern, MESSAGES.VALIDATIONS.PASSWORD_SYMBOL_REQUIRED)
      .matches(VALIDATORS.PASSWORD.digitPattern, MESSAGES.VALIDATIONS.PASSWORD_DIGIT_REQUIRED)
      .matches(VALIDATORS.PASSWORD.upperCaseLowerCasePattern, MESSAGES.VALIDATIONS.PASSWORD_LOWERCASE_UPPERCASE_REQUIRED)
  },
  get FORGOT_PASSWORD_FORM() {
    return Yup.object().shape({
      email: Yup.string().when('mode', {
        is: PreviewTypes.SEND_EMAIL,
        then: this.EMAIL_AND_PASSWORD_SCHEME.email,
        otherwise: Yup.string()
      }),
      password: Yup.string().when('mode', {
        is: PreviewTypes.PASSWORD,
        then: this.EMAIL_AND_PASSWORD_SCHEME.password,
        otherwise: Yup.string()
      })
    });
  },
  get LOGIN_FORM() {
    return Yup.object().shape({
      ...this.EMAIL_AND_PASSWORD_SCHEME
    });
  },
  get REGISTER_FORM() {
    return this.LOGIN_FORM.concat(
      Yup.object().shape({
        confirmPassword: Yup.string()
          .required(MESSAGES.VALIDATIONS.CONFIRM_PASSWORD_IS_REQUIRED)
          .oneOf([Yup.ref('password'), null], MESSAGES.VALIDATIONS.CONFIRM_PASSWORD_IS_NOT_MATCH),
        fullName: Yup.string()
          .required(MESSAGES.VALIDATIONS.FULL_NAME_IS_REQUIRED)
          .min(VALIDATORS.NAME.min, MESSAGES.VALIDATIONS.FULL_NAME_MIN)
          .max(VALIDATORS.NAME.max, MESSAGES.VALIDATIONS.FULL_NAME_MAX)
          .matches(VALIDATORS.NAME.onlyLatinPattern, MESSAGES.VALIDATIONS.FULL_NAME_ONLY_LATIN_PATTERN)
          .matches(VALIDATORS.NAME.pattern, MESSAGES.VALIDATIONS.FULL_NAME_PATTERN)
      })
    );
  },
  AUTH_CODE: Yup.object().shape({
    code: Yup.string().required('Auth code is required')
  })
};

export default Schema;
