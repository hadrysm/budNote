import React from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';
import { StyledLink, StyledLogo } from './Logo.style';

const Logo = ({ label, closeNavigation }) => (
  <StyledLink to={routes.home} onClick={closeNavigation}>
    <StyledLogo>{label}</StyledLogo>
  </StyledLink>
);

Logo.propTypes = {
  label: PropTypes.string.isRequired,
  closeNavigation: PropTypes.func.isRequired,
};

export default Logo;
