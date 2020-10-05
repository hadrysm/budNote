import React from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';
import { StyledLink, StyledLogo } from './Logo.style';

const Logo = ({ label, path }) => (
  <StyledLink to={path}>
    <StyledLogo>{label}</StyledLogo>
  </StyledLink>
);

Logo.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
};

Logo.defaultProps = {
  path: routes.home,
};

export default Logo;
