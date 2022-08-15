const CookieParser = require('cookie-parser');
const cookie = require('js-cookie');

const Cookie = {
  setToken(token: string, expires = 3) {
    cookie.set('token', token, { ...(expires && { expires: expires /*3 day*/ }) });
  },
  get getToken() {
    return cookie.get('token');
  },
  getTokenByReq(cookies: { [key: string]: string }) {
    return CookieParser.JSONCookies(cookies).token;
  },
  getCookieByKey(key: string) {
    return cookie.get(key);
  },
  removeCookieByKey(key: string) {
    cookie.remove(key);
  }
};

export default Cookie;
