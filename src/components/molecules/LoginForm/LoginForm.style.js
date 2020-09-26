import styled, { css } from 'styled-components';

import Button from 'components/atoms/Button/Button.style';

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 2rem;
  padding: 4rem 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  overflow: hidden;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled(Button)`
  margin: 1rem 0;
  width: 100%;

  ${({ createAccount }) =>
    createAccount &&
    css`
      font-size: ${({ theme }) => theme.font.size.xxs};
      border: none;
      color: ${({ theme }) => theme.colors.secondary};
    `}
`;
