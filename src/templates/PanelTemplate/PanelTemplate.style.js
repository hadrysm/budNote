import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  margin-left: 7rem;
  overflow: hidden;

  @media ${({ theme }) => theme.mq.tablet} {
    margin-left: 10rem;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  display: block;
  margin: 2rem auto 0;
  width: 100%;
  flex: 1;
`;
