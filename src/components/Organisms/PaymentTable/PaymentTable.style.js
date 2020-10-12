import styled, { css } from 'styled-components';

import List from 'components/atoms/List/List.style';
import ListItem from 'components/atoms/ListItem/ListItem.style';

export const Table = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  overflow: hidden;
`;

export const CardRow = styled.div`
  background-color: ${({ theme }) => theme.colors.white};

  ${({ isHeading }) =>
    isHeading &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};

      li {
        font-weight: ${({ theme }) => theme.font.weight.bold};
        color: ${({ theme }) => theme.colors.white};
      }
    `}
`;

export const TableList = styled(List)`
  display: grid;
  grid-template-columns: 1fr repeat(5, 13rem);
  padding: 1rem;
`;

export const Item = styled(ListItem)``;
