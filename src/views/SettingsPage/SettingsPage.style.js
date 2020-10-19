import styled from 'styled-components';

import ListItem from 'components/atoms/ListItem/ListItem.style';
import List from 'components/atoms/List/List.style';

export const InnerWrapper = styled.div`
  margin-top: 2rem;
`;

//  ..................

export const Box = styled.div`
  width: 100%;
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;

export const CategoryList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 10rem));
  grid-gap: 1rem;
`;

export const CategotyItem = styled(ListItem)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  min-width: 9rem;
  /* text-align: center; */
`;
