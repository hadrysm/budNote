import styled from 'styled-components';

import ListItem from 'components/atoms/ListItem/ListItem.style';

const CategoryItem = styled(ListItem)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  min-width: 9rem;
  font-size: ${({ theme }) => theme.font.size.xxxs};
`;

export default CategoryItem;
