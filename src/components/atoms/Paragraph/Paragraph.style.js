import styled from 'styled-components';

export const StyledParagraph = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }

  @media ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;
