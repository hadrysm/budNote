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
