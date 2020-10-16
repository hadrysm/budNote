import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/atoms/Button/Button.style';

import { CollectionContext } from 'context/CollectionContext';
import { Wrapper } from './RemoveBox.style';

const RemoveBox = ({ itemId }) => {
  const { handleDeleteBudget } = useContext(CollectionContext);

  return (
    <Wrapper>
      <Button onClick={() => handleDeleteBudget(itemId)}>Usuń</Button>
    </Wrapper>
  );
};

RemoveBox.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default RemoveBox;
