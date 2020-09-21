import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BurgerButton = styled(motion.button)`
  position: relative;
  width: 3rem;
  height: 4rem;
  padding: 0;
  margin: 0;
  z-index: ${({ theme }) => theme.zIndex.level9};
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  overflow: hidden;
`;

export const BurgerLine = styled(motion.span)`
  display: block;
  width: 100%;
  height: 2px;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const variantsLineOne = {
  open: {
    rotate: 135,
    y: 4,
    x: 0,
  },
  closed: {
    rotate: 0,
    y: 0,
  },
  hover: {
    x: 0,
  },
};

export const variantsLineTwo = {
  closed: {
    x: '+33%',
  },
  hover: {
    x: 0,
  },
};

export const variantsLineThree = {
  open: {
    rotate: -135,
    y: -4,
    x: 0,
  },
  closed: {
    rotate: 0,
    y: 0,
    x: '+66%',
  },
  hover: {
    x: 0,
  },
};
