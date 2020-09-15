import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  min-width: 15rem;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-family: inherit;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.text};
    `}
`;
