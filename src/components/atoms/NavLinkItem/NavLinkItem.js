import React from 'react';
import PropTypes from 'prop-types';

import { StyledNavLink, StyledButtonLink, StyledLine } from './NavLinkItem.style';

const NavLinkItem = ({ linkPath, children }) => (
  <StyledNavLink to={linkPath} exact>
    <StyledButtonLink whileHover="hover" type="button">
      {children}
      <StyledLine initial="hidden" whileHover="hover" />
    </StyledButtonLink>
  </StyledNavLink>
);

NavLinkItem.propTypes = {
  linkPath: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavLinkItem;
