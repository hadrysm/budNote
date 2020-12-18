import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { barVariants } from 'variants';
import ButtonIcon from 'components/atoms/ButtonIcon';

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
  background-color: ${({ theme }) => theme.colors.modalBgc};
  z-index: ${({ theme }) => theme.zIndex.level8};
  display: flex;
  align-items: center;
  justify-content: center;
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
  min-height: 100%;
  width: 70%;
  max-width: 60rem;
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  overflow-y: auto;

  @media ${({ theme }) => theme.mq.tablet} {
    padding: 6rem 3rem;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      top: 10%;
      left: 0;
      margin: auto;
      min-height: auto;
      border-radius: 1rem;
      overflow: hidden;
    `}
`;

export const CloseButton = styled(ButtonIcon)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: rotate(45deg);
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
