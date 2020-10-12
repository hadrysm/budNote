import styled from 'styled-components';

import List from 'components/atoms/List/List.style';
import ListItem from 'components/atoms/ListItem/ListItem.style';

export const TableList = styled(List)`
  display: grid;
  grid-template-columns: 1fr repeat(5, 13rem);
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Item = styled(ListItem)``;
