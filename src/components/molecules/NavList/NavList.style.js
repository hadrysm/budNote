import styled from 'styled-components';
import { motion } from 'framer-motion';

import { navigationVariants } from 'variants';
import List from 'components/atoms/List/List.style';
import ListItem from 'components/atoms/ListItem/ListItem.style';

const { navList } = navigationVariants;

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: navList,
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: ${({ theme }) => theme.zIndex.level6};

  @media ${({ theme }) => theme.mq.desktop} {
    position: static;
    width: auto;
    height: auto;
  }
`;

export const StyledList = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }
`;

export const StyledListItem = styled(ListItem)`
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mq.desktop} {
    margin: 0 0.5rem;
  }
`;
