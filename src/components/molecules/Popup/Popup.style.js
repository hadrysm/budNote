import styled from 'styled-components';
import { motion } from 'framer-motion';

import Paragraph from 'components/atoms/Paragraph/Paragraph.style';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 50%;
  width: 90%;
  max-width: 40rem;
  transform: translateX(-50%);
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.success};
  z-index: ${({ theme }) => theme.zIndex.level9};
`;

export const StyledParagraph = styled(Paragraph)`
  padding: 2rem 0;
`;
