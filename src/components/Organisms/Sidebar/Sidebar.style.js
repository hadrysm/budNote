import styled from 'styled-components';
import { motion } from 'framer-motion';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';
import List from 'components/atoms/List/List.style';
import ListItem from 'components/atoms/ListItem/ListItem.style';

import { sidebarVariants } from 'variants';

const { sidebar } = sidebarVariants;

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: sidebar,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 7rem;
  min-height: 100vh;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.mq.tablet} {
    width: 10rem;
  }
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  width: 5rem;
  height: 5rem;

  @media ${({ theme }) => theme.mq.tablet} {
    width: 6rem;
    height: 6rem;
  }
`;

export const StyledList = styled(List)`
  margin-top: 5vh;
  margin-bottom: auto;
`;

export const StyledListItem = styled(ListItem)`
  margin-bottom: 1rem;
`;

export const Header = styled.header``;
