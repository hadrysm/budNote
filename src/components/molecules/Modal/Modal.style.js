import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { barVariants } from 'variants';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';

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
  z-index: ${({ theme }) => theme.zIndex.level8};
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
  min-height: 100vh;
  width: 70%;
  max-width: 60rem;
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-left: 0.5rem solid ${({ theme }) => theme.colors.secondary};
  border-right: 0.5rem solid ${({ theme }) => theme.colors.secondary};
  overflow: hidden;

  @media ${({ theme }) => theme.mq.tablet} {
    padding: 6rem 3rem;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      max-height: ${({ small }) => (small ? '40vh' : '90vh')};
      min-height: 30vh;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border-radius: 1rem;
    `}
`;

export const CloseButton = styled(ButtonIcon)`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
`;
