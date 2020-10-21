import React from 'react';
import PropTypes from 'prop-types';

import plusIcon from 'assets/icons/plus.svg';
import { Wrapper, Label, RemoveButton } from './CategoryItem.style';

const CategoryItem = ({ handleOpenRemoveBudgetModal, handleOpenUpdateBudgetModal, label, id }) => {
  return (
    <Wrapper>
      <Label onClick={() => handleOpenUpdateBudgetModal(id)}>{label}</Label>
      <RemoveButton icon={plusIcon} onClick={() => handleOpenRemoveBudgetModal(id)} />
    </Wrapper>
  );
};

CategoryItem.propTypes = {
  handleOpenRemoveBudgetModal: PropTypes.func.isRequired,
  handleOpenUpdateBudgetModal: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CategoryItem;
