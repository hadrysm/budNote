import styled from 'styled-components';

import ButtonIcon from 'components/atoms/ButtonIcon';

export const InnerWrapper = styled.div`
  margin-top: 2rem;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  width: 5rem;
  height: 5rem;
  bottom: 2rem;
  right: 2rem;
  z-index: ${({ theme }) => theme.zIndex.level9};
`;
