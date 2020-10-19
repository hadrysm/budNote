import styled from 'styled-components';

import List from 'components/atoms/List/List.style';

export const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  border-radius: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  position: relative;
`;

export const CategoryList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 10rem));
  grid-gap: 1rem;
`;
