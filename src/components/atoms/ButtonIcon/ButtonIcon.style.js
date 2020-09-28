import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 12rem;
  height: 12rem;
  border-radius: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.tertiary};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default ButtonIcon;
