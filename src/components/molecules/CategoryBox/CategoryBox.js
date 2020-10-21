import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import CategoryItem from 'components/atoms/CategoryItem/CategoryItem';

import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import { Wrapper, CategoryList } from './CategoryBox.style';

const CategoryBox = ({ handleOpenRemoveBudgetModal, handleOpenUpdateBudgetModal }) => {
  const categoryOptions = useSelector(({ settings }) => settings.category);

  return (
    <Wrapper>
      {!categoryOptions.length && <Paragraph>Dodaj pierwszą kategorie</Paragraph>}
      <CategoryList>
        {categoryOptions &&
          categoryOptions.map(({ displayValue, id }) => (
            <CategoryItem
              key={id}
              id={id}
              label={displayValue}
              handleOpenRemoveBudgetModal={handleOpenRemoveBudgetModal}
              handleOpenUpdateBudgetModal={handleOpenUpdateBudgetModal}
            />
          ))}
      </CategoryList>
    </Wrapper>
  );
};

CategoryBox.propTypes = {
  handleOpenRemoveBudgetModal: PropTypes.func.isRequired,
  handleOpenUpdateBudgetModal: PropTypes.func.isRequired,
};

export default CategoryBox;
