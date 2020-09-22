import React, { useState } from 'react';
import { motion } from 'framer-motion';

import routes from 'routes';

import Burger from 'components/atoms/Burger/Burger';
import Button from 'components/atoms/Button/Button.style';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import { Nav } from './Navigation.style';

const navVariants = {
  hidden: {
    y: -200,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.2,
      type: 'spring',
      stiffness: 90,
    },
  },
};

const Navigation = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);

  const handleBurgerClick = () => setMenuVisibility((prevState) => !prevState);

  const closeNavigation = () => {
    if (!isMenuVisible) return;
    setMenuVisibility(false);
  };

  return (
    <motion.header variants={navVariants} initial="hidden" animate="visible">
      <Nav initial={false} animate={isMenuVisible ? 'open' : 'closed'}>
        <Logo label="budNote" closeNavigation={closeNavigation} />
        <NavList closeNavigation={closeNavigation} />
        <LinkItem to={routes.login}>
          <Button secondary>login</Button>
        </LinkItem>
        <Burger handleClick={handleBurgerClick} isMenuVisible={isMenuVisible} />
      </Nav>
    </motion.header>
  );
};

export default Navigation;
