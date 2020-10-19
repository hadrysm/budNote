import React from 'react';

import CategoryItem from 'components/atoms/CategoryItem/CategoryItem.style';

import { Wrapper, CategoryList } from './CategoryBox.style';

const CategoryBox = () => {
  return (
    <Wrapper>
      <CategoryList>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </CategoryList>
    </Wrapper>
  );
};

export default CategoryBox;
