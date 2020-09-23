import styled from 'styled-components';

const Paragraph = styled.p`
  margin: ${({ withMargin }) => (withMargin ? `${withMargin}rem 0` : '0')};
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 1.3;

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export default Paragraph;
