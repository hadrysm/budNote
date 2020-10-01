import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import routes from 'routes';
import { generateUnicId } from 'helpers';
import NavLinkItem from 'components/atoms/NavLinkItem/NavLinkItem';
import Button from 'components/atoms/Button/Button.style';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import { Wrapper, StyledList, StyledListItem } from './NavList.style';

const navItemsData = [
  {
    key: generateUnicId(),
    linkPath: routes.about,
    label: 'o nas',
  },
  {
    key: generateUnicId(),
    linkPath: routes.contact,
    label: 'kontakt',
  },
];

const NavList = ({ closeNavigation }) => {
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  const listItems = navItemsData.map(({ key, linkPath, label }) => (
    <StyledListItem key={key} onClick={closeNavigation}>
      <NavLinkItem linkPath={linkPath} label={label} />
    </StyledListItem>
  ));

  return (
    <Wrapper>
      <StyledList>
        {listItems}
        <LinkItem to={routes.login}>
          <Button secondary onClick={closeNavigation}>
            {isAuth ? 'panel' : 'login'}
          </Button>
        </LinkItem>
      </StyledList>
    </Wrapper>
  );
};

NavList.propTypes = {
  closeNavigation: PropTypes.func.isRequired,
};

export default NavList;
