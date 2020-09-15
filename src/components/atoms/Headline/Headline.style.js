import styled from 'styled-components';

const Headline = styled.h2`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ customFontSize, theme }) => `${customFontSize}rem` || theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 0.08em;
  line-height: 1.5;

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ customFontSize, theme }) => `${customFontSize}rem` || theme.font.size.l};
  }
`;

export default Headline;
