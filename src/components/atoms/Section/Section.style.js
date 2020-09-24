import styled from 'styled-components';
import { motion } from 'framer-motion';

import { pageVariants } from 'variants';

const { children } = pageVariants;

const Section = styled(motion.section).attrs(({ withVariants }) => ({
  variants: withVariants && children,
}))`
  display: ${({ isFlex }) => (isFlex ? 'flex' : 'block')};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}rem` : 'none')};
  margin: ${({ withMargin }) => (withMargin ? `${withMargin}rem` : '0 auto 2rem')};
  padding: 2rem 0;

  @media ${({ theme }) => theme.mq.bigTablet} {
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}rem` : '80rem')};
  }
`;

export default Section;
