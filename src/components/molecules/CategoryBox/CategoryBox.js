import React from 'react';
import { useSelector } from 'react-redux';

import CategoryItem from 'components/atoms/CategoryItem/CategoryItem.style';

import { Wrapper, CategoryList } from './CategoryBox.style';

const CategoryBox = () => {
  const categoryOptions = useSelector(({ settings }) => settings.category);

  return (
    <Wrapper>
      <CategoryList>
        {categoryOptions.map(({ displayValue }) => (
          <CategoryItem key={displayValue}>{displayValue}</CategoryItem>
        ))}
      </CategoryList>
    </Wrapper>
  );
};

export default CategoryBox;
