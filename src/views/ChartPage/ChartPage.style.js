import styled from 'styled-components';
import { motion } from 'framer-motion';

import { pieVAriants } from 'variants';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InnerWrapper = styled.div`
  min-height: 80vh;
`;

export const Content = styled(motion.div).attrs(() => ({
  variants: pieVAriants,
}))`
  height: 70vh;

  @media ${({ theme }) => theme.mq.tablet} {
    margin-top: 5rem;
  }
`;

export const NoDataWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  text-align: center;
`;
