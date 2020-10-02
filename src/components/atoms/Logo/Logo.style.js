import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.level9};
`;

export const StyledLogo = styled.h1`
  margin: 0;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 0.5px;

  @media ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`;
