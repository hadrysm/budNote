import styled from 'styled-components';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  grid-template-rows: 1fr 0.5fr;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem 0;
`;
