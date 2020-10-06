import styled from 'styled-components';
import { motion } from 'framer-motion';

import Section from 'components/atoms/Section/Section.style';
import { taskVariants } from 'variants';

const { parent } = taskVariants;

export const StyledSection = styled(Section)`
  margin: 0;
`;

export const GridWrapper = styled(motion.div).attrs(() => ({
  variants: parent,
  initial: 'hidden',
  animate: 'visible',
}))`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 4rem;
`;

export const InnerWrapper = styled.div`
  margin-left: 2rem;
`;
