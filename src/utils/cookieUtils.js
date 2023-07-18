import Cookies from 'js-cookie';

export const setCookie = (key, value, options = {}) => {
  Cookies.set(key, JSON.stringify(value), options);
};

export const getCookie = (key) => {
  const cookie = Cookies.get(key);
  return cookie ? JSON.parse(cookie) : null;
};

export const removeCookie = (key) => {
  Cookies.remove(key);
};
