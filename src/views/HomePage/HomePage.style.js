import styled from 'styled-components';

import Headline from 'components/atoms/Headline/Headline.style';
import Button from 'components/atoms/Button/Button.style';

export const StyledHeadline = styled(Headline)`
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.mq.tablet} {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`;

export const StyledButton = styled(Button)`
  margin: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
