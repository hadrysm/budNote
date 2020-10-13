import styled from 'styled-components';
import { motion } from 'framer-motion';

import { barVariants } from 'variants';

const { background, box } = barVariants;

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: background,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const BoxWrapper = styled(motion.div).attrs(() => ({
  variants: box,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  max-width: 60rem;
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-left: 0.5rem solid ${({ theme }) => theme.colors.secondary};
  overflow: hidden;

  @media ${({ theme }) => theme.mq.tablet} {
    padding: 6rem 3rem;
  }
`;
