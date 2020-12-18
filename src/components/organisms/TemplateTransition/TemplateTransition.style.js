import styled from 'styled-components';
import { motion } from 'framer-motion';

import { templateVariants } from 'variants';

const { parent, child } = templateVariants;

export const TransitionWrapper = styled(motion.div).attrs(() => ({
  variants: parent,
  initial: 'visible',
  animate: 'hidden',
  exit: 'visible',
  ariaHidden: true,
}))`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  transform-origin: left;
  z-index: ${({ theme }) => theme.zIndex.level9};
`;

export const Rectangle = styled(motion.div).attrs(() => ({
  variants: child,
}))`
  height: 25vh;
  margin-top: -5vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  transform-origin: right;
`;
