import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { inputVariants } from 'variants';

const { labelVariants, lineVariants, feedbackVariants } = inputVariants;

export const Wrapper = styled.div`
  width: 100%;
  margin: 4rem 0;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const Label = styled(motion.label).attrs(({ isFocused }) => ({
  variants: labelVariants,
  animate: isFocused ? 'isFocused' : 'initial',
}))`
  position: absolute;
  top: 10px;
  left: 0;
  font-size: ${({ theme }) => theme.font.size.xxs};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const StyledInput = styled(motion.input)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.xxs};
  padding: 2rem 0.5rem 1rem;
  border: none;
  line-height: 2.5rem;
  width: 100%;
  background: transparent;

  :focus {
    outline: none;
  }

  ${({ as }) =>
    as === 'textarea' &&
    css`
      min-height: 20rem;
      resize: none;
    `}
`;

export const InputLineBar = styled(motion.div).attrs(({ isFocused }) => ({
  variants: lineVariants,
  animate: isFocused ? 'isFocused' : 'initial',
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: ${({ theme, isError }) =>
    isError ? theme.colors.error : theme.colors.primary};
  z-index: ${({ theme }) => theme.zIndex.level3};
`;

export const FeedbackInput = styled(motion.div).attrs(() => ({
  variants: feedbackVariants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  position: absolute;
  bottom: -3.5rem;
  left: 0;
  color: ${({ theme }) => theme.colors.error};
  text-align: left;
`;
