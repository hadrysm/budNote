import {
  themeColorType,
  SET_THEME_COLOR,
  FETCH_CATEGORY_START,
  FETCH_CATEGORY_FAIL,
  FETCH_CATEGORY_SUCCESS,
  CLEAR_CATEGORY,
} from './types';

const INITIAL_STATE = {
  colorTheme: themeColorType.LIGHT,
  category: [],
  loading: false,
  error: null,
};

const settingReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_THEME_COLOR:
      return {
        ...state,
        colorTheme: payload.option,
      };

    case FETCH_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        category: payload.category,
        loading: false,
      };

    case CLEAR_CATEGORY:
      return {
        ...state,
        notes: [],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default settingReducer;
