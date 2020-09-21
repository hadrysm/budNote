import React, { useState } from 'react';

import Burger from 'components/atoms/Burger/Burger';
import Logo from 'components/atoms/Logo/Logo';
import { Nav } from './Navigation.style';

const Navigation = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const handleBurgerClick = () => setMenuVisibility((prevState) => !prevState);

  return (
    <header>
      <Nav initial={false} animate={isMenuVisible ? 'open' : 'closed'}>
        <Logo label="budNote" />
        <Burger handleClick={handleBurgerClick} />
      </Nav>
    </header>
  );
};

export default Navigation;
