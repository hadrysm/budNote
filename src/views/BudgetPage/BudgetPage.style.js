import styled from 'styled-components';

import ButtonIcon from 'components/atoms/ButtonIcon';
import Section from 'components/atoms/Section';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  align-items: flex-start;
`;

export const InnerWapper = styled.div`
  padding: 0 0.5rem;
`;
export const StyledSection = styled(Section)`
  margin-top: 3.5rem;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  width: 5rem;
  height: 5rem;
  bottom: 2rem;
  right: 2rem;
  z-index: ${({ theme }) => theme.zIndex.level9};
`;

export const NoDataWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem 0;
`;
