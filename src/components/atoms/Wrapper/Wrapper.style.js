import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { pageVariants } from 'variants';

const { mainContent } = pageVariants;

const Wrapper = styled(motion.div).attrs(({ withVariants }) => ({
  variants: withVariants && mainContent,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.layout.mainSpacing};
  overflow: hidden;

  ${({ isFlex }) =>
    isFlex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    `}

  ${({ isColumn }) =>
    isColumn &&
    css`
      flex-direction: column;
    `}
`;

export default Wrapper;
