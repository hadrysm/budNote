import React from 'react';
import PropTypes from 'prop-types';

import plusIcon from 'assets/icons/plus.svg';
import { Wrapper, Label, RemoveButton } from './CategoryItem.style';

const CategoryItem = ({ handleOpenRemoveBudgetModal, label, id }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <RemoveButton icon={plusIcon} onClick={() => handleOpenRemoveBudgetModal(id)} />
    </Wrapper>
  );
};

CategoryItem.propTypes = {
  handleOpenRemoveBudgetModal: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CategoryItem;
