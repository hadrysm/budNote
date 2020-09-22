import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const ACTIVE_CLASS_NAME = 'active';

const buttonVariants = {
  hover: {
    scale: 1.1,
  },
};

const lineVariants = {
  hidden: {
    x: '-110%',
  },

  hover: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
    },
  },
};

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
`;

export const ButtonLink = styled(motion.button).attrs(() => ({
  variants: buttonVariants,
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
  variants: lineVariants,
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
