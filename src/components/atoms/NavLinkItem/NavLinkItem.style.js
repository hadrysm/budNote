import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { buttonVariants } from 'variants';

const ACTIVE_CLASS_NAME = 'active';
const { button, line } = buttonVariants;

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
`;

export const ButtonLink = styled(motion.button).attrs(() => ({
  variants: button,
}))`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0.5rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.font.size.s};
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const Line = styled(motion.div).attrs(() => ({
  variants: line,
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: -1;

  &.${ACTIVE_CLASS_NAME} {
    transform: translate(100%);
  }
`;
