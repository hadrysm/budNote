import { themeColorType, SET_THEME_COLOR } from './types';

const INITIAL_STATE = {
  colorTheme: themeColorType.DARK,
};

const settingReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SET_THEME_COLOR:
      return {
        ...state,
        colorTheme: payload.option,
      };

    default:
      return state;
  }
};

export default settingReducer;
