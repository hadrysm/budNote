import styled from 'styled-components';
import { motion } from 'framer-motion';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';
import { taskVariants } from 'variants';

const { parent } = taskVariants;

export const GridWrapper = styled(motion.div).attrs(() => ({
  variants: parent,
  initial: 'hidden',
  animate: 'visible',
}))`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 30rem));
  grid-gap: 4rem;
`;

export const InnerWrapper = styled.div`
  margin: 2rem 0;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  width: 5rem;
  height: 5rem;
  bottom: 2rem;
  right: 2rem;
  z-index: ${({ theme }) => theme.zIndex.level9};
`;
