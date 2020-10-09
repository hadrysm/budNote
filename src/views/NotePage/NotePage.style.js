import styled from 'styled-components';

import Button from 'components/atoms/Button/Button.style';

export const InnerWrapper = styled.div`
  min-width: 25rem;
  max-width: 40rem;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const StyledButton = styled(Button)`
  margin-bottom: 2rem;
`;
