import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const TransitionContext = createContext({
  transition: true,
  setTransition: () => {},
});

const TransitionContextProvider = ({ children }) => {
  const [transition, setTransition] = useState(true);
  return (
    <TransitionContext.Provider
      value={{
        transition,
        setTransition,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

TransitionContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default TransitionContextProvider;
