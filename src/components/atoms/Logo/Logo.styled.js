import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level9};
  display: inline-block;
  text-decoration: none;
`;

export const StyledLogo = styled.h1`
  margin: 0;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 0.5px;
`;
