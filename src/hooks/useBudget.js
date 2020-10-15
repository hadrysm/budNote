// import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { db } from 'firebase/base';

export const useBudget = () => {
  // const dispatch = useDispatch();
  const uId = useSelector((state) => state.auth.uid);

  const budgetCollectionRef = db.collection('users').doc(uId).collection('budget');

  const handleAddNewExpense = async ({ title, amount, category }) => {
    const expenseData = {
      title,
      amount,
      category,
    };
    // dispatch loading

    try {
      await budgetCollectionRef.add(expenseData);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleAddNewExpense };
};
