import styled from 'styled-components';
import { motion } from 'framer-motion';

import List from 'components/atoms/List';

import { categoryVariatns } from 'variants';

const { categoryBox } = categoryVariatns;

export const Wrapper = styled(motion.div).attrs(() => ({
  variants: categoryBox,
}))`
  width: 100%;
  padding: 3rem 2rem;
  border-radius: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  position: relative;
`;

export const CategoryList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 10rem));
  grid-gap: 1.5rem;
`;
