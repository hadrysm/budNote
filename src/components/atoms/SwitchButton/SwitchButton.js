import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Ball } from './SwitchButton.style';

const SwitchButton = ({ handleClick, isOn, toLeft }) => {
  return (
    <Wrapper onClick={handleClick} isOn={isOn} toLeft={toLeft}>
      <Ball />
    </Wrapper>
  );
};

SwitchButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isOn: PropTypes.bool,
  toLeft: PropTypes.bool,
};

SwitchButton.defaultProps = {
  isOn: false,
  toLeft: false,
};

export default SwitchButton;
