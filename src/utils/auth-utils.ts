import Cookie from 'js-cookie';
import SSRCookie from 'cookie';
import { AUTH_AB_CRYPT, TOKEN } from './constants';

export function setAuthCredentials(token: string) {
  Cookie.set(AUTH_AB_CRYPT, JSON.stringify({ token }));
}

export function getAuthCredentials(context?: any): {
  token: string | null;
} {
  let authCred;
  if (context) {
    authCred = parseSSRCookie(context)[AUTH_AB_CRYPT];
  } else {
    authCred = Cookie.get(AUTH_AB_CRYPT);
  }
  if (authCred) {
    return JSON.parse(authCred);
  }
  return { token: null };
}

export function parseSSRCookie(context: any) {
  return SSRCookie.parse(context.req.headers.cookie ?? '');
}

export function isAuthenticated(_cookies: any) {
  return !!_cookies[TOKEN];
}
