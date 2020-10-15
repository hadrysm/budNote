import { combineReducers } from 'redux';

import settingsReducer from 'store/settings/reducer';
import authReducer from 'store/auth/reducer';
import notesReducer from 'store/notes/reducers';
import budgetReducer from 'store/budget/reducers';

const rootReducer = combineReducers({
  settings: settingsReducer,
  auth: authReducer,
  notes: notesReducer,
  budget: budgetReducer,
});

export default rootReducer;
