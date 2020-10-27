import styled from 'styled-components';

import ListItem from 'components/atoms/ListItem';
import List from 'components/atoms/List';
import ButtonIcon from 'components/atoms/ButtonIcon';

import { paymentTableVariantes } from 'variants';

const { tableItem } = paymentTableVariantes;

export const StyledListItem = styled(ListItem).attrs(() => ({
  variants: tableItem,
  whileHover: 'hover',
}))`
  margin-top: 2rem;

  @media ${({ theme }) => theme.mq.tablet} {
    margin: 0;
  }
`;

export const TableList = styled(List)`
  display: grid;
  grid-template-columns: 1fr;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  position: relative;

  @media ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const DataItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  position: relative;

  @media ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 0;
  }

  ::before {
    position: absolute;
    left: -10rem;
    height: 100%;
    white-space: nowrap;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;

    @media ${({ theme }) => theme.mq.tablet} {
      display: none;
      margin-bottom: 0;
    }
  }

  :nth-of-type(1):before {
    content: 'Nazwa';
  }
  :nth-of-type(2):before {
    content: 'Kategoria';
  }
  :nth-of-type(3):before {
    content: 'Kwota';
  }
  :nth-of-type(4):before {
    content: 'Data';
  }
  :nth-of-type(5):before {
    content: 'Akcja';
  }
  :nth-of-type(6):before {
    content: 'Status';
  }
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  margin-right: 1rem;
`;
