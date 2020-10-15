import { FETCH_BUDGET_START, FETCH_BUDGET_SUCCESS, FETCH_BUDGET_FAIL } from './types';

export const fetchBudgetStart = () => ({
  type: FETCH_BUDGET_START,
});

export const fetchBudgetFail = (error) => ({
  type: FETCH_BUDGET_FAIL,
  payload: {
    error,
  },
});

export const fetchBudgetSuccess = (budgetData) => ({
  type: FETCH_BUDGET_SUCCESS,
  payload: {
    budgetData,
  },
});
