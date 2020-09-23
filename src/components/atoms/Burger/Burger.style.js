import styled from 'styled-components';
import { motion } from 'framer-motion';

import { navigationVariants } from 'variants';

const { firstLine, secondLine, thirdLine } = navigationVariants.burger;

export const BurgerButton = styled(motion.button).attrs(({ isMenuVisible }) => ({
  initial: false,
  animate: isMenuVisible ? 'open' : 'closed',
  whileHover: 'hover',
}))`
  width: 3rem;
  height: 4rem;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level9};

  @media ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const BurgerLine = styled(motion.span).attrs(({ lineOne, lineTwo, lineThree }) => ({
  variants: (lineOne && firstLine) || (lineTwo && secondLine) || (lineThree && thirdLine),
}))`
  display: block;
  width: 100%;
  height: 2px;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.colors.text};
`;
