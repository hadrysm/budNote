import React from 'react';
import PropTypes from 'prop-types';

import { StyledNavLink, ButtonLink, Line } from './NavLinkItem.style';

const NavLinkItem = ({ linkPath, label }) => (
  <StyledNavLink to={linkPath} exact>
    <ButtonLink whileHover="hover" type="button">
      {label}
      <Line initial="hidden" whileHover="hover" />
    </ButtonLink>
  </StyledNavLink>
);

NavLinkItem.propTypes = {
  linkPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLinkItem;
