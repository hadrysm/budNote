import React from 'react';
import PropTypes from 'prop-types';

import { BurgerButton, BurgerLine } from './Burger.style';

const Burger = ({ handleClick, isMenuVisible, isFixed }) => (
  <BurgerButton isFixed={isFixed} onClick={handleClick} isMenuVisible={isMenuVisible}>
    <BurgerLine lineOne />
    {!isMenuVisible && <BurgerLine lineTwo />}
    <BurgerLine lineThree />
  </BurgerButton>
);

Burger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool,
  isFixed: PropTypes.bool,
};

Burger.defaultProps = {
  isMenuVisible: false,
  isFixed: false,
};

export default Burger;
