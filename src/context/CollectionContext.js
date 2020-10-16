import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { useBudget } from 'hooks/useBudget';

export const CollectionContext = createContext({
  handleAddNewExpense: () => {},
  handleDeleteBudget: () => {},
  handleUpdateBudget: () => {},
});

const CollectionProvider = ({ children }) => {
  const { handleAddNewExpense, handleDeleteBudget, handleUpdateBudget } = useBudget();

  return (
    <CollectionContext.Provider
      value={{ handleAddNewExpense, handleDeleteBudget, handleUpdateBudget }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

CollectionProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default CollectionProvider;
