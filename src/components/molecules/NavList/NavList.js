import React from 'react';

import routes from 'routes';
import { generateUnicId } from 'helpers';
import NavLinkItem from 'components/atoms/NavLinkItem/NavLinkItem';
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
  const listItems = navItemsData.map(({ key, linkPath, label }) => (
    <StyledListItem key={key}>
      <NavLinkItem linkPath={linkPath} label={label} />
    </StyledListItem>
  ));

  return (
    <Wrapper>
      <StyledList>{listItems}</StyledList>
    </Wrapper>
  );
};

export default NavList;
