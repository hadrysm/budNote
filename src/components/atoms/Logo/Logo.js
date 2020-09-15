import React from 'react';

import routes from 'routes';
import { StyledLink, StyledLogo } from './Logo.styled';

const Logo = () => (
  <StyledLink to={routes.home}>
    <StyledLogo>budNote</StyledLogo>
  </StyledLink>
);

export default Logo;
