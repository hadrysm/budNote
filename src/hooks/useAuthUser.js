import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth, db } from 'firebase/base';
import { authStart, authSuccess, authFail, setUser, authLogout } from 'store/auth/action';
import { getFirebaseErrorMessage } from 'helpers';

export const useAuthUser = () => {
  const dispatch = useDispatch();

  const handleSignUp = async (email, password) => {
    dispatch(authStart());

    try {
      const { user } = await auth().createUserWithEmailAndPassword(email, password);

      await db.collection('users').doc(user.uid).set({
        email,
        uid: user.uid,
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
      await auth()
        .signOut()
        .then(() => {
          dispatch(authLogout);
        });
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
