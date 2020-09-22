import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  hover: {
    scale: 0.95,
  },
  tap: {
    scale: 0.9,
  },
};

const StyledButton = styled(motion.button).attrs(() => ({
  variants,
  whileHover: 'hover',
  whileTap: 'tap',
}))`
  display: inline-block;
  min-width: 10rem;
  padding: 1rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-family: inherit;
  outline: none;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.text};
    `}
`;

export default StyledButton;
