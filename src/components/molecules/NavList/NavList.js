import React from 'react';
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

const NavList = () => {
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  const listItems = navItemsData.map(({ key, linkPath, label }) => (
    <StyledListItem key={key}>
      <NavLinkItem linkPath={linkPath} label={label} />
    </StyledListItem>
  ));

  return (
    <Wrapper>
      <StyledList>
        {listItems}
        <LinkItem to={isAuth ? routes.budget : routes.login}>
          <Button secondary>{isAuth ? 'panel' : 'login'}</Button>
        </LinkItem>
      </StyledList>
    </Wrapper>
  );
};

export default NavList;
