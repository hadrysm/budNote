import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/Button.style';

import { CollectionContext } from 'context/CollectionContext';
import { Wrapper } from './Box.style';

const Box = ({ itemId }) => {
  // const { handleDeleteBudget } = useContext(CollectionContext);
  const { handleDeleteItem } = useContext(CollectionContext);

  return (
    <Wrapper>
      <Button onClick={() => handleDeleteItem(itemId)}>Usuń</Button>
    </Wrapper>
  );
};

Box.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Box;
