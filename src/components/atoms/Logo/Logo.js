import React from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';
import { StyledLink, StyledLogo } from './Logo.styled';

const Logo = ({ label }) => (
  <StyledLink to={routes.home}>
    <StyledLogo>{label}</StyledLogo>
  </StyledLink>
);

Logo.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Logo;
