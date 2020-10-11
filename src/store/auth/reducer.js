import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  SET_USER,
  CLEAR_AUTH_ERROR,
} from './types';

const INITIAL_STATE = {
  uid: null,
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
        uid: payload.uid,
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
        uid: null,
        loading: false,
      };

    case SET_USER:
      return {
        ...state,
        uid: payload.uid,
      };

    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;
