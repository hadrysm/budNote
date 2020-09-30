import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './types';

export const authStart = () => ({ type: AUTH_START });

export const authSuccess = (token, userId) => ({
  type: AUTH_SUCCESS,
  payload: {
    token,
    userId,
  },
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  payload: {
    error,
  },
});

export const authLogout = () => ({ type: AUTH_LOGOUT });
