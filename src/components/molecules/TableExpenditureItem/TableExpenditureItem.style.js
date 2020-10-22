import styled from 'styled-components';

import ListItem from 'components/atoms/ListItem/ListItem.style';
import List from 'components/atoms/List/List.style';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';

export const StyledListItem = styled(ListItem)`
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
    left: -60%;
    width: 50%;
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
