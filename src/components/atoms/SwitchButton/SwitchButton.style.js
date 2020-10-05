import styled from 'styled-components';
import { motion } from 'framer-motion';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export const Wrapper = styled.div`
  width: 4rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: ${({ isOn }) => (isOn ? 'flex-end' : 'flex-start')};
  border-radius: 5rem;
  padding: 0.5rem;
  margin-left: auto;
  margin-right: 2rem;
  cursor: pointer;

  @media ${({ theme }) => theme.mq.desktop} {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Ball = styled(motion.div).attrs(() => ({
  layout: true,
  transition: spring,
}))`
  width: 1.8rem;
  height: 1.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
`;

//   true
//   justify-content: flex-end;
