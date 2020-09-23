import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.layout.mainSpacing};
  overflow: hidden;
`;

export default Wrapper;
