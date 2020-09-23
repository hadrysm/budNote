import styled from 'styled-components';
import { motion } from 'framer-motion';

import Headline from 'components/atoms/Headline/Headline.style';
import Button from 'components/atoms/Button/Button.style';
import { pageVariants } from 'variants';

const { mainContent } = pageVariants;

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: mainContent,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StyledHeadline = styled(Headline)`
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.mq.tablet} {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`;

export const StyledButton = styled(Button)`
  margin: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
