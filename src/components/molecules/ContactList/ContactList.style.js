import styled from 'styled-components';
import { motion } from 'framer-motion';

import List from 'components/atoms/List';
import ListItem from 'components/atoms/ListItem';
import Paragraph from 'components/atoms/Paragraph';

import { pageVariants, buttonVariants } from 'variants';

const { childrenFadeIn } = pageVariants;
const { button } = buttonVariants;

export const StyledList = styled(List)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledListItem = styled(ListItem).attrs(() => ({
  variants: button,
  whileHover: 'hover',
}))`
  margin: 2rem 0;
  padding: 1rem 2rem;
`;

export const InnerWrapper = styled(motion.div).attrs((withVariants) => ({
  variants: withVariants && childrenFadeIn,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: 3rem;
`;
