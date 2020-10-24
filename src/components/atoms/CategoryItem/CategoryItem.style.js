import styled from 'styled-components';

import ListItem from 'components/atoms/ListItem/ListItem.style';
import { categoryVariatns } from 'variants';
import Paragraph from '../Paragraph/Paragraph.style';
import ButtonIcon from '../ButtonIcon/ButtonIcon.style';

const { categoryItem } = categoryVariatns;

export const Wrapper = styled(ListItem).attrs(() => ({
  variants: categoryItem,
  whileHover: 'hover',
}))`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  min-width: 9rem;
  position: relative;
  cursor: pointer;
`;

export const Label = styled(Paragraph)`
  font-size: ${({ theme }) => theme.font.size.xxxs};
  color: ${({ theme }) => theme.colors.text};
`;

export const RemoveButton = styled(ButtonIcon)`
  position: absolute;
  top: -1rem;
  right: -0.5rem;
  border-radius: 50%;
  background-size: 40%;
  transform: rotate(45deg);
  background-color: ${({ theme }) => theme.colors.primary};
`;
