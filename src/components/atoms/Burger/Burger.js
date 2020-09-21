import React from 'react';
import PropTypes from 'prop-types';

import {
  BurgerButton,
  BurgerLine,
  variantsLineTwo,
  variantsLineOne,
  variantsLineThree,
} from './Burger.style';

const Burger = ({ handleClick, isMenuVisible }) => (
  <BurgerButton
    onClick={handleClick}
    initial={false}
    animate={isMenuVisible ? 'open' : 'closed'}
    whileHover="hover"
  >
    <BurgerLine variants={variantsLineOne} />
    {!isMenuVisible && <BurgerLine variants={variantsLineTwo} />}
    <BurgerLine variants={variantsLineThree} />
  </BurgerButton>
);

Burger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool,
};

Burger.defaultProps = {
  isMenuVisible: false,
};

export default Burger;
