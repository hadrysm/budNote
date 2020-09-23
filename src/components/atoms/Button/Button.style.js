import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { buttonVariants } from 'variants';

const { button } = buttonVariants;

const StyledButton = styled(motion.button).attrs(() => ({
  variants: button,
  whileHover: 'hover',
  whileTap: 'tap',
}))`
  display: inline-block;
  min-width: 10rem;
  padding: 1.5rem 0.5rem;
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

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export default StyledButton;
