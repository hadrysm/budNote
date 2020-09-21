import React, { useState } from 'react';

import Burger from 'components/atoms/Burger/Burger';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import { Nav } from './Navigation.style';

const Navigation = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const handleBurgerClick = () => setMenuVisibility((prevState) => !prevState);

  const closeNavigation = () => {
    if (!isMenuVisible) return;
    setMenuVisibility(false);
  };

  return (
    <header>
      <Nav initial={false} animate={isMenuVisible ? 'open' : 'closed'}>
        <Logo label="budNote" closeNavigation={closeNavigation} />
        <NavList />
        <Burger handleClick={handleBurgerClick} isMenuVisible={isMenuVisible} />
      </Nav>
    </header>
  );
};

export default Navigation;
