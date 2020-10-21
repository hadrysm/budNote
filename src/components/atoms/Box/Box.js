import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CollectionContext } from 'context/CollectionContext';
import { Wrapper, StyledButton } from './Box.style';

const Box = ({ itemId }) => {
  const { handleDeleteItem } = useContext(CollectionContext);

  return (
    <Wrapper>
      <StyledButton onClick={() => handleDeleteItem(itemId)}>Usuń</StyledButton>
    </Wrapper>
  );
};

Box.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Box;
