import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledWrapper = styled.div`
  width: 100%;
  margin: 2.4rem 0;
  position: relative;
`;

export const StyledLabel = styled(motion.label)`
  color: ${({ theme }) => theme.colors.text};
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

export const StyledInput = styled(motion.input)`
  ${({ as }) =>
    as === 'input' &&
    css`
      color: ${({ theme }) => theme.colors.grey};
      font-size: ${({ theme }) => theme.font.size.xxs};
      border: none;
      line-height: 2rem;
      width: 100%;
      background: none;

      /* :focus {
        outline: none;
      } */

      :focus ${StyledLabel} {
        top: -22px;
        font-size: 13px;
      }
    `}
`;
