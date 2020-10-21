import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import CategoryItem from 'components/atoms/CategoryItem/CategoryItem';

import { Wrapper, CategoryList } from './CategoryBox.style';

const CategoryBox = ({ handleOpenRemoveBudgetModal }) => {
  const categoryOptions = useSelector(({ settings }) => settings.category);

  return (
    <Wrapper>
      <CategoryList>
        {categoryOptions.map(({ displayValue, id }) => (
          <CategoryItem
            key={displayValue}
            id={id}
            label={displayValue}
            handleOpenRemoveBudgetModal={handleOpenRemoveBudgetModal}
          />
        ))}
      </CategoryList>
    </Wrapper>
  );
};

CategoryBox.propTypes = {
  handleOpenRemoveBudgetModal: PropTypes.func.isRequired,
};

export default CategoryBox;
