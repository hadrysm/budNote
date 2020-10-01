import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT, SET_USER } from './types';

export const authStart = () => ({ type: AUTH_START });

export const authSuccess = (uid) => ({
  type: AUTH_SUCCESS,
  payload: {
    uid,
  },
});

export const authFail = (error) => ({
  type: AUTH_FAIL,
  payload: {
    error,
  },
});

export const authLogout = () => ({ type: AUTH_LOGOUT });

export const setUser = (uid) => ({
  type: SET_USER,
  payload: {
    uid,
  },
});
