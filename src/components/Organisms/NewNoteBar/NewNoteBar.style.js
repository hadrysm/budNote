import styled from 'styled-components';
import { motion } from 'framer-motion';

import { newNoteBarVariants } from 'variants';

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: newNoteBarVariants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 70%;
  max-width: 60rem;
  padding: 3rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-left: 0.5rem solid ${({ theme }) => theme.colors.secondary};
  overflow: hidden;

  @media ${({ theme }) => theme.mq.tablet} {
    padding: 6rem 3rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
