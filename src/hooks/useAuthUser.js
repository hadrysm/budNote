import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth, db } from 'firebase/base';
import { authStart, authSuccess, authFail, setUser, authLogout } from 'store/auth/actions';
import { clearNotes } from 'store/notes/actions';
import { clearBudget } from 'store/budget/actions';
import { clearCategory } from 'store/settings/actions';
import { getFirebaseErrorMessage } from 'helpers';

export const useAuthUser = () => {
  const dispatch = useDispatch();

  const handleSignUp = async (email, password) => {
    dispatch(authStart());

    try {
      const { user } = await auth().createUserWithEmailAndPassword(email, password);

      // change this
      await db.collection('users').doc(user.uid).set({
        email,
        uid: user.uid,
      });

      await db.collection('users').doc(user.uid).collection('category').add({
        displayValue: 'mieszkanie',
        value: 'mieszkanie',
      });

      await db.collection('users').doc(user.uid).collection('category').add({
        displayValue: 'jedzenie',
        value: 'jedzenie',
      });

      dispatch(authSuccess(user.uid));
    } catch (err) {
      dispatch(authFail(getFirebaseErrorMessage(err.code)));
    }
  };

  const handleLogin = async (email, password) => {
    dispatch(authStart());

    try {
      const { user } = await auth().signInWithEmailAndPassword(email, password);
      dispatch(authSuccess(user.uid));
    } catch (err) {
      dispatch(authFail(getFirebaseErrorMessage(err.code)));
    }
  };

  const handleSignout = async () => {
    dispatch(authStart());

    try {
      await auth().signOut();
      dispatch(authLogout());
      dispatch(clearNotes());
      dispatch(clearBudget());
      dispatch(clearCategory());
    } catch (err) {
      dispatch(authFail(getFirebaseErrorMessage(err.code)));
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((data) => {
      if (data) {
        dispatch(setUser(data.uid));
      } else {
        dispatch(authLogout());
      }

      return () => unsubscribe();
    });
  }, [dispatch]);

  return {
    handleSignUp,
    handleLogin,
    handleSignout,
  };
};
