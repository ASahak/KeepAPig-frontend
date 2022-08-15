const VALIDATORS = {
  NAME: {
    min: 3,
    max: 30,
    pattern: /.*?([a-zA-Z0-9]+)_([a-zA-Z0-9]+).*/
  },
  EMAIL_PATTERN: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i,
  PASSWORD_VALIDATOR_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*\\-\\_\\?])(?=.{8,20})/,
  UPPERCASE_LOWERCASE_PATTERN: /([a-z].*[A-Z])|([A-Z].*[a-z])/,
  DIGIT_PATTERN: /\d+/i,
  SYMBOL_PATTERN: /^(?=.*[!@#\\$%\\^&\\*\\-\\_\\?])/i
};

const WHITE_LIST: string[] = [];

const GOOGLE = {
  AUTH_SRC: 'https://accounts.google.com/gsi/client'
};

export { VALIDATORS, WHITE_LIST, GOOGLE };

export const PAGE_ROUTES = {
  home: '/',
  signIn: '/login',
  register: '/register'
};
