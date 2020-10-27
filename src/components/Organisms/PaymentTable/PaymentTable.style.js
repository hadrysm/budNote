import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import List from 'components/atoms/List';
import ListItem from 'components/atoms/ListItem';

import { paymentTableVariantes } from 'variants';

const { table } = paymentTableVariantes;

export const Table = styled(motion.div).attrs(() => ({
  variants: table,
}))`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.grey300};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  overflow: hidden;
  display: grid;
  grid-template-columns: 10rem 1fr;

  @media ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`;

export const CardRow = styled.div`
  background-color: ${({ theme }) => theme.colors.grey300};

  ${({ isHeading }) =>
    isHeading &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const TableList = styled(List)`
  display: none;
  padding: 1rem;

  @media ${({ theme }) => theme.mq.tablet} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
  }
`;

export const Item = styled(ListItem)`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.white};
`;
