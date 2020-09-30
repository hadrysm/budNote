import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './types';

const INITIAL_STATE = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        userId: payload.userId,
        error: null,
      };

    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      };

    default:
      return state;
  }
};

export default authReducer;
