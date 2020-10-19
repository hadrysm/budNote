import {
  SET_THEME_COLOR,
  FETCH_CATEGORY_START,
  FETCH_CATEGORY_FAIL,
  FETCH_CATEGORY_SUCCESS,
  CLEAR_CATEGORY,
} from './types';

export const setThemeColor = (option) => ({ type: SET_THEME_COLOR, payload: { option } });

export const fetchCategoryStart = () => ({
  type: FETCH_CATEGORY_START,
});

export const fetchCategorySuccess = (category) => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: {
    category,
  },
});

export const fetchCategoryFail = (error) => ({
  type: FETCH_CATEGORY_FAIL,
  payload: {
    error,
  },
});

export const clearCategory = () => ({ type: CLEAR_CATEGORY });
