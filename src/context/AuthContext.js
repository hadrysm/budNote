import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { useAuthUser } from 'hooks/useAuthUser';

export const AuthContext = createContext({
  handleSignUp: () => {},
  handleLogin: () => {},
  handleSignout: () => {},
});

const AuthProvider = ({ children }) => {
  const { handleSignUp, handleLogin, handleSignout } = useAuthUser();

  return (
    <AuthContext.Provider value={{ handleSignUp, handleLogin, handleSignout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AuthProvider;
