import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { buttonVariants } from 'variants';

const ACTIVE_CLASS_NAME = '.active';
const { button, line } = buttonVariants;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  variants: line,
  initial: 'hidden',
}))`
  display: block;
  text-decoration: none;
  position: relative;

  &${ACTIVE_CLASS_NAME} ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonLink = styled(motion.button).attrs(() => ({
  variants: button,
  initial: 'hidden',
  whileHover: 'hover',
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
  initial: 'hidden',
  whileHover: 'hover',
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;
