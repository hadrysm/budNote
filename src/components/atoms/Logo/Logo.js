import React from 'react';
import PropTypes from 'prop-types';

import routes from 'routes';
import { StyledLink, StyledLogo } from './Logo.style';

const Logo = ({ label, path, closeNavigation }) => (
  <StyledLink to={path} onClick={closeNavigation}>
    <StyledLogo>{label}</StyledLogo>
  </StyledLink>
);

Logo.propTypes = {
  label: PropTypes.string.isRequired,
  closeNavigation: PropTypes.func,
  path: PropTypes.string,
};

Logo.defaultProps = {
  closeNavigation: () => {},
  path: routes.home,
};

export default Logo;
