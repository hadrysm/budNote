import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  min-height: 80vh;
`;

export const Content = styled.div`
  height: 70vh;

  @media ${({ theme }) => theme.mq.tablet} {
    margin-top: 5rem;
  }
`;
