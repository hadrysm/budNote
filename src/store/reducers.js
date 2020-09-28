import { combineReducers } from 'redux';

import settingsReducer from 'store/settings/reducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
