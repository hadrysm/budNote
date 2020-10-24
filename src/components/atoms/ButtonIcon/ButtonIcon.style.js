import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: inline-block;
  width: 7rem;
  height: 7rem;
  border-radius: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.grey200};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  outline: none;

  ${({ isBig }) =>
    isBig &&
    css`
      width: 12rem;
      height: 12rem;
    `}

  ${({ isSmall }) =>
    isSmall &&
    css`
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 10%;
      background-size: 60%;
      border: none;
      background-color: ${({ theme }) => theme.colors.grey200};
    `}

  ${({ status }) =>
    status &&
    css`
      background-color: ${({ isCompleted, theme }) =>
        isCompleted ? theme.colors.success : theme.colors.grey200};
    `}
`;

export default ButtonIcon;
