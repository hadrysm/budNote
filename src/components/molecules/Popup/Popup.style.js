import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import { popupVariants } from 'variants';

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: popupVariants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  position: fixed;
  top: 10vh;
  left: 0;
  width: 80%;
  min-width: 30rem;
  max-width: 60rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  z-index: ${({ theme }) => theme.zIndex.level9};

  ${({ isError }) =>
    isError &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
    `}

  ${({ isSuccess }) =>
    isSuccess &&
    css`
      background-color: ${({ theme }) => theme.colors.success};
    `}
`;

export const StyledParagraph = styled(Paragraph)`
  padding: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;
