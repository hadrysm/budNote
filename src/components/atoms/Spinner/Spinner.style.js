import styled from 'styled-components';
import { motion } from 'framer-motion';

import { spinnerVariants } from 'variants';

const { container, circle } = spinnerVariants;

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: container,
  animate: 'animate',
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4rem;
  height: 2rem;
  margin: 0;
`;

export const Circle = styled(motion.span).attrs(() => ({
  variants: circle,
}))`
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.text};
`;
