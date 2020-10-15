import styled from 'styled-components';
import { motion } from 'framer-motion';

import downArrowIcon from 'assets/icons/downArrow.svg';
import { inputVariants } from 'variants';

const { feedbackVariants } = inputVariants;

export const Wrapper = styled.div`
  width: 100%;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.xxs};
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
`;

export const StyledSelect = styled.select`
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  background-color: transparent;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${downArrowIcon});
  background-repeat: no-repeat;
  background-size: 1.5rem;
  background-position: right 1rem top 50%;
`;

export const Option = styled.option`
  padding: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const FeedbackSelect = styled(motion.div).attrs(() => ({
  variants: feedbackVariants,
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
}))`
  position: absolute;
  bottom: -3rem;
  left: 0;
  color: ${({ theme }) => theme.colors.error};
  text-align: left;
`;
