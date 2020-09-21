import styled from 'styled-components';
import { motion } from 'framer-motion';

import List from 'components/atoms/List/List.style';
import ListItem from 'components/atoms/ListItem/ListItem.style';

const variants = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      mass: 0.4,
      damping: 8,
    },
  },
  closed: {
    x: '+100%',
  },
};

export const Wrapper = styled(motion.div).attrs(() => ({
  variants,
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledList = styled(List)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledListItem = styled(ListItem)`
  margin-bottom: 1rem;
`;
