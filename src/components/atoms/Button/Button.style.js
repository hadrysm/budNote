import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  hover: {
    scale: 1.05,
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
  min-width: 15rem;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-family: inherit;
  cursor: pointer;
  outline: none;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.text};
    `}
`;

export default StyledButton;
