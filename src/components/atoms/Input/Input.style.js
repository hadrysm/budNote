import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const labelVariants = {
  initial: {
    y: 0,
    scale: 1,
  },

  isFocused: {
    y: -22,
    scale: 0.8,
    transition: { type: 'spring', stiffness: 320, bounce: 0.25 },
  },
};

export const lineVariants = {
  initial: {
    x: '-200%',
  },
  isFocused: {
    x: 0,
  },
};

export const StyledWrapper = styled.div`
  width: 100%;
  margin: 3rem 0;
  position: relative;
`;

export const StyledLabel = styled(motion.label).attrs(({ isFocused }) => ({
  variants: labelVariants,
  animate: isFocused ? 'isFocused' : 'initial',
}))`
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  font-size: ${({ theme }) => theme.font.size.xxs};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const StyledInput = styled(motion.input)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.font.size.xxs};
  padding: 1.5rem 0.5rem 0.5rem;
  border: none;
  line-height: 2rem;
  width: 100%;
  background: transparent;

  :focus {
    outline: none;
  }

  ${({ as }) => as === 'input' && css``}

  ${({ as }) =>
    as === 'textarea' &&
    css`
      min-height: 15rem;
      resize: none;
    `}
`;

export const StyledInputLineBar = styled(motion.div).attrs(({ isFocused }) => ({
  variants: lineVariants,
  animate: isFocused ? 'isFocused' : 'initial',
}))`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
