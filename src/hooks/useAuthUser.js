import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import app from 'firebase/base';
import { authStart, authSuccess, authFail, setUser, authLogout } from 'store/auth/action';

export const useAuthUser = () => {
  const dispatch = useDispatch();

  const handleSignUp = async (email, password) => {
    dispatch(authStart());

    try {
      const { user } = await app.auth().createUserWithEmailAndPassword(email, password);
      dispatch(authSuccess(user.uid));
    } catch (err) {
      dispatch(authFail(err));
    }
  };

  const handleLogin = async (email, password) => {
    dispatch(authStart());

    try {
      const { user } = await app.auth().signInWithEmailAndPassword(email, password);
      dispatch(authSuccess(user.uid));
    } catch (err) {
      dispatch(authFail(err));
    }
  };

  const handleSignout = async () => {
    dispatch(authStart());

    try {
      await app
        .auth()
        .signOut()
        .then(() => {
          dispatch(authLogout);
        });
    } catch (err) {
      dispatch(authFail(err));
    }
  };

  useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged((data) => {
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
