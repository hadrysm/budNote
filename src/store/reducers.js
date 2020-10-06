import { combineReducers } from 'redux';

import settingsReducer from 'store/settings/reducer';
import authReducer from 'store/auth/reducer';
import notesReducer from 'store/notes/reducers';

const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  notes: notesReducer,
});

export default rootReducer;
