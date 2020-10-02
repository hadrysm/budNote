import styled from 'styled-components';
import { motion } from 'framer-motion';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';
import List from 'components/atoms/List/List.style';
import ListItem from 'components/atoms/ListItem/ListItem.style';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100vh;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StyledButtonIcon = styled(ButtonIcon)`
  margin-top: auto;
`;

export const StyledList = styled(List)`
  margin-top: 10vh;
`;

export const StyledListItem = styled(ListItem)`
  margin-bottom: 1rem;
`;
