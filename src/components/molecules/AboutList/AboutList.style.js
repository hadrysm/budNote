import styled from 'styled-components';
import { motion } from 'framer-motion';

import ListItem from 'components/atoms/ListItem';
import Paragraph from 'components/atoms/Paragraph';
import Headline from 'components/atoms/Headline';

import { pageVariants, buttonVariants } from 'variants';

const { childrenFadeIn } = pageVariants;
const { button } = buttonVariants;

export const StyledListItem = styled(ListItem).attrs(() => ({
  variants: button,
  whileHover: 'hover',
}))`
  display: ${({ isFlex }) => (isFlex ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  padding: 1rem 2rem;
`;

export const InnerWrapper = styled(motion.div).attrs((withVariants) => ({
  variants: withVariants && childrenFadeIn,
}))`
  display: ${({ isFlex }) => (isFlex ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  flex-direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')};
`;

export const StyledHeadline = styled(Headline)`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -2rem;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: 1rem;
`;
