import styled from 'styled-components';

import Section from 'components/atoms/Section';

export const StyledSection = styled(Section)`
  display: none;

  @media ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`;
