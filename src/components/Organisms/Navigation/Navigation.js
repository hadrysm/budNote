import React from 'react';

import { themeColorType } from 'store/settings/types';
import { useDarkMode } from 'hooks/useDarkMode';
import Burger from 'components/atoms/Burger/Burger';
import SwitchButton from 'components/atoms/SwitchButton/SwitchButton';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';
import { useToggleNav } from 'hooks/useToggleNav';
import { Nav, Header } from './Navigation.style';

const Navigation = () => {
  const [isMenuVisible, handleToggleMenuVisibility] = useToggleNav();
  const [theme, toggleTheme] = useDarkMode();

  return (
    <Header>
      <Nav isMenuVisible={isMenuVisible}>
        <Logo label="budNote" />
        <NavList />
        <SwitchButton handleClick={toggleTheme} isOn={theme === themeColorType.LIGHT} />
        <Burger handleClick={handleToggleMenuVisibility} isMenuVisible={isMenuVisible} />
      </Nav>
    </Header>
  );
};

export default Navigation;
