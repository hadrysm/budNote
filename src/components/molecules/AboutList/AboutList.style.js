import styled from 'styled-components';
import { motion } from 'framer-motion';

import ListItem from 'components/atoms/ListItem/ListItem.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Headline from 'components/atoms/Headline/Headline.style';

import { pageVariants, buttonVariants } from 'variants';

const { childrenFadeIn } = pageVariants;
const { button } = buttonVariants;

export const InnerWrapper = styled(motion.div).attrs((withVariants) => ({
  variants: withVariants && childrenFadeIn,
}))``;

export const StyledListItem = styled(ListItem).attrs(() => ({
  variants: button,
  whileHover: 'hover',
}))`
  margin: 2rem 0;
  padding: 1rem 0;
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
  margin-top: 0.5rem;

  ::first-letter {
    text-transform: uppercase;
  }
`;
