import React from 'react';
import PropTypes from 'prop-types';

import {
  BurgerButton,
  BurgerLine,
  variantsLineTwo,
  variantsLineOne,
  variantsLineThree,
} from './Burger.style';

const Burger = ({ handleClick }) => (
  <BurgerButton onClick={handleClick}>
    <BurgerLine variants={variantsLineOne} />
    <BurgerLine variants={variantsLineTwo} />
    <BurgerLine variants={variantsLineThree} />
  </BurgerButton>
);

Burger.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Burger;
