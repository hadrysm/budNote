import styled from 'styled-components';
import { motion } from 'framer-motion';

import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import { taskVariants } from 'variants';

const { task } = taskVariants;

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: task,
  whileHover: 'hover',
}))`
  min-width: 15rem;
  max-width: 30rem;
  min-height: 35rem;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  border-radius: 1rem;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  cursor: pointer;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  background-color: ${({ theme, withColor }) =>
    withColor ? theme.colors.primary : theme.colors.tertiary};
`;

export const DateInfo = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.xxxs};
`;
