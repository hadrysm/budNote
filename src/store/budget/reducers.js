import { FETCH_BUDGET_START, FETCH_BUDGET_SUCCESS, FETCH_BUDGET_FAIL, CLEAR_BUDGET } from './types';

const INITIAL_STATE = {
  budget: [],
  loading: false,
  error: null,
};

const budgetReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_BUDGET_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_BUDGET_FAIL:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    case FETCH_BUDGET_SUCCESS:
      return {
        ...state,
        loading: false,
        budget: payload.budgetData,
      };

    case CLEAR_BUDGET:
      return {
        ...state,
        budget: [],
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default budgetReducer;
