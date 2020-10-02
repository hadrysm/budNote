import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: ${({ isBig }) => (isBig ? '12rem' : '7rem')};
  height: ${({ isBig }) => (isBig ? '12rem' : '7rem')};
  border-radius: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.tertiary};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export default ButtonIcon;
