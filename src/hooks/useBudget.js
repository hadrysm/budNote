import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { db } from 'firebase/base';
import { fetchBudgetStart, fetchBudgetFail, fetchBudgetSuccess } from 'store/budget/actions';

export const useBudget = () => {
  const dispatch = useDispatch();
  const uId = useSelector((state) => state.auth.uid);

  const budgetCollectionRef = db.collection('users').doc(uId).collection('budget');

  const fetchBudgetData = async () => {
    const results = await budgetCollectionRef.get();
    const budgetData = [];

    results.docs.map((doc) => budgetData.push({ id: doc.id, ...doc.data() }));
    dispatch(fetchBudgetSuccess(budgetData));
  };

  const memoizedFetchBudgetData = useCallback(fetchBudgetData, []);

  const handleAddNewExpense = async ({ title, amount, category }) => {
    const expenseData = {
      title,
      amount,
      category,
      createAt: Date.now(),
    };
    dispatch(fetchBudgetStart());

    try {
      await budgetCollectionRef.add(expenseData);
      memoizedFetchBudgetData();
    } catch (error) {
      dispatch(fetchBudgetFail(error));
    }
  };

  useEffect(() => {
    memoizedFetchBudgetData();
  }, [memoizedFetchBudgetData]);

  return { handleAddNewExpense };
};
