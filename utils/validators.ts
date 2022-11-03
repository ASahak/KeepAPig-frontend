import * as Yup from 'yup';
import { VALIDATORS } from './constants';
import { PreviewTypes } from '@/components/Entry/ForgotPassword/types';

const Schema = {
  EMAIL_AND_PASSWORD_SCHEME: {
    email: Yup.string().required('Please complete this mandatory field').email('Please write your email address in format: john.doe@example.com').max(255),
    password: Yup.string()
      .required('Please complete this mandatory field')
      .min(8, 'Use min 8 characters')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .max(20, 'Use max 20 characters')
      .matches(VALIDATORS.SYMBOL_PATTERN, 'Password must contain at least one symbol')
      .matches(VALIDATORS.DIGIT_PATTERN, 'Password must contain at least one digit')
      .matches(VALIDATORS.UPPERCASE_LOWERCASE_PATTERN, 'Password must contain at least one uppercase and one lowercase character')
  },
  get FORGOT_PASSWORD_FORM () {
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
    })
  },
  get LOGIN_FORM() {
    return Yup.object().shape({
      ...this.EMAIL_AND_PASSWORD_SCHEME,
    })
  },
  get REGISTER_FORM() {
    return this.LOGIN_FORM.concat(
      Yup.object().shape({
        confirmPassword: Yup.string()
          .required('Please complete this mandatory field')
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        fullName: Yup.string()
          .required('Please complete this mandatory field')
          .min(VALIDATORS.NAME.min, 'Full name must contain at least 3 character')
          .max(VALIDATORS.NAME.max, 'Full name must contain max 30 character')
          .matches(/[a-zA-Z]/, 'Password can only contain latin letters.')
          .matches(VALIDATORS.NAME.pattern, 'Please write your name in format: John_Doe')
      })
    );
  }
};

export default Schema;
