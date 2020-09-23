import React, { useState, useEffect } from 'react';

import routes from 'routes';

import Burger from 'components/atoms/Burger/Burger';
import Button from 'components/atoms/Button/Button.style';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import { Nav, Header, StyledLinkItem } from './Navigation.style';

const Navigation = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const handleBurgerClick = () => setMenuVisibility((prevState) => !prevState);

  const closeNavigation = () => {
    if (!isMenuVisible) return;
    setMenuVisibility(false);
  };

  useEffect(() => {
    if (isMenuVisible) window.scrollTo(0, 0);
  }, [isMenuVisible]);

  return (
    <Header>
      <Nav isMenuVisible={isMenuVisible}>
        <Logo label="budNote" closeNavigation={closeNavigation} />
        <NavList closeNavigation={closeNavigation} />
        <StyledLinkItem to={routes.login}>
          <Button secondary>login</Button>
        </StyledLinkItem>
        <Burger handleClick={handleBurgerClick} isMenuVisible={isMenuVisible} />
      </Nav>
    </Header>
  );
};

export default Navigation;
