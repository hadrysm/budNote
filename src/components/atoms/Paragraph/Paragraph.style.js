import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export default Paragraph;
