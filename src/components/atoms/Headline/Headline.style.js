import styled from 'styled-components';

const Headline = styled.h2`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ customFontSize, theme }) => `${customFontSize}rem` || theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 0.08em;
  line-height: 1.5;

  ::first-letter {
    text-transform: uppercase;
  }

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ customFontSize, theme }) =>
      customFontSize ? `${customFontSize}rem` : theme.font.size.l};
  }

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ customFontSize, theme }) =>
      customFontSize ? `${customFontSize}rem` : theme.font.size.m};
  }
`;

export default Headline;
