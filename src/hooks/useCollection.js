import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useCollection = ({ collection, reduxActions }) => {
  const dispatch = useDispatch();

  const collectionRef = collection;
  const { fetchDataSuccess, fetchStart, fetchDataFail, fetchCurrentItemSuccess } = reduxActions;

  const fetchCollection = async () => {
    const res = await collectionRef.get();
    const data = [];

    res.docs.map((doc) => data.push({ id: doc.id, ...doc.data() }));
    dispatch(fetchDataSuccess(data));
  };

  const memoizedFetchCollection = useCallback(fetchCollection, []);

  const handleAddItem = async (data) => {
    dispatch(fetchStart());

    try {
      await collectionRef.add(data);
      memoizedFetchCollection();
    } catch (error) {
      dispatch(fetchDataFail(error));
    }
  };

  const handleDeleteItem = async (id) => {
    dispatch(fetchStart());

    try {
      await collectionRef.doc(id).delete();
      memoizedFetchCollection();
    } catch (error) {
      dispatch(fetchDataFail(error));
    }
  };

  const handleUpdateItem = async (id, updateData) => {
    dispatch(fetchStart());

    try {
      await collectionRef.doc(id).set({ ...updateData });
      memoizedFetchCollection();
    } catch (error) {
      dispatch(fetchDataFail(error));
    }
  };

  const handleGetCurrentItem = async (id) => {
    dispatch(fetchStart());

    try {
      const res = await collectionRef.doc(id).get();
      dispatch(fetchCurrentItemSuccess(res.data()));
    } catch (error) {
      dispatch(fetchDataFail(error));
    }
  };

  useEffect(() => {
    memoizedFetchCollection();
  }, [memoizedFetchCollection]);

  return { handleAddItem, handleDeleteItem, handleUpdateItem, handleGetCurrentItem };
};
