import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BurgerButton = styled.button`
  position: relative;
  width: 4rem;
  height: 4rem;
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
    y: 7,
  },
  closed: {
    rotate: 0,
    y: 0,
  },
};

export const variantsLineTwo = {
  open: {
    x: 100,
  },
  closed: {
    x: 0,
  },
};

export const variantsLineThree = {
  open: {
    rotate: -135,
    y: -7,
  },
  closed: {
    rotate: 0,
    y: 0,
  },
};
