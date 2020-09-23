import styled from 'styled-components';
import { motion } from 'framer-motion';

import { buttonVariants, footerVariants } from 'variants';

const { button } = buttonVariants;

export const Wrapper = styled(motion.footer).attrs(() => ({
  variants: footerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
`;

export const StyledLink = styled(motion.a).attrs(() => ({
  variants: button,
  whileHover: 'hover',
  whileTap: 'tap',
}))`
  display: block;
  margin: 0 1rem;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.text};

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;
