import styled from 'styled-components';
import { motion } from 'framer-motion';

import { navigationVariants } from 'variants';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';

const { nav } = navigationVariants;

export const Header = styled(motion.header).attrs(() => ({
  variants: nav,
  initial: 'hidden',
  animate: 'visible',
}))``;

export const Nav = styled(motion.nav).attrs(({ isMenuVisible }) => ({
  initial: false,
  animate: isMenuVisible ? 'open' : 'closed',
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

export const StyledLinkItem = styled(LinkItem)`
  margin-right: 4rem;
`;
