import React, { useState } from 'react';

import routes from 'routes';

import Burger from 'components/atoms/Burger/Burger';
import Button from 'components/atoms/Button/Button.style';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import { Nav, Header } from './Navigation.style';

const Navigation = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const handleBurgerClick = () => setMenuVisibility((prevState) => !prevState);

  const closeNavigation = () => {
    if (!isMenuVisible) return;
    setMenuVisibility(false);
  };

  return (
    <Header>
      <Nav isMenuVisible={isMenuVisible}>
        <Logo label="budNote" closeNavigation={closeNavigation} />
        <NavList closeNavigation={closeNavigation} />
        <LinkItem to={routes.login}>
          <Button secondary>login</Button>
        </LinkItem>
        <Burger handleClick={handleBurgerClick} isMenuVisible={isMenuVisible} />
      </Nav>
    </Header>
  );
};

export default Navigation;
