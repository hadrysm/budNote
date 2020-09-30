import { combineReducers } from 'redux';

import settingsReducer from 'store/settings/reducer';
import authReducer from 'store/auth/reducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
});

export default rootReducer;
