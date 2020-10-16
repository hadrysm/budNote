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
    top: 1rem;
  }
  :nth-of-type(2):before {
    content: 'Kategoria';
    top: 3rem;
  }
  :nth-of-type(3):before {
    content: 'Kwota';
    top: 5rem;
  }
  :nth-of-type(4):before {
    content: 'Data';
    top: 7rem;
  }
  :nth-of-type(5):before {
    content: 'Akcja';
    top: 10rem;
  }
  :nth-of-type(6):before {
    content: 'Status';
    top: 14rem;
  }
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  margin-right: 1rem;
`;
