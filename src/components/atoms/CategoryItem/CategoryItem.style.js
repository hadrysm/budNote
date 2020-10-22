import styled from 'styled-components';

import ListItem from 'components/atoms/ListItem/ListItem.style';
import Paragraph from '../Paragraph/Paragraph.style';
import ButtonIcon from '../ButtonIcon/ButtonIcon.style';

export const Wrapper = styled(ListItem)`
  background-color: ${({ theme }) => theme.colors.tertiary};
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
`;
