import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}rem` : 'auto')};
  margin: ${({ withMargin }) => (withMargin ? `${withMargin}rem` : '0 auto 2rem')};
`;

export default Section;
