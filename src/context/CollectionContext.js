import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { useCollection } from 'hooks/useCollection';

export const CollectionContext = createContext({
  handleAddItem: () => {},
  handleDeleteItem: () => {},
  handleUpdateItem: () => {},
  handleGetCurrentItem: () => {},
});

const CollectionProvider = ({ children, collectionConfig }) => {
  const { handleAddItem, handleDeleteItem, handleUpdateItem, handleGetCurrentItem } = useCollection(
    collectionConfig,
  );

  return (
    <CollectionContext.Provider
      value={{ handleAddItem, handleDeleteItem, handleUpdateItem, handleGetCurrentItem }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

CollectionProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  collectionConfig: PropTypes.objectOf(PropTypes.object, PropTypes.object).isRequired,
};

export default CollectionProvider;
