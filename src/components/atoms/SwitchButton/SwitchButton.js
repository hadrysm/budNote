import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Ball } from './SwitchButton.style';

const SwitchButton = ({ handleClick, isOn }) => {
  return (
    <Wrapper onClick={handleClick} isOn={isOn}>
      <Ball />
    </Wrapper>
  );
};

SwitchButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isOn: PropTypes.bool,
};

SwitchButton.defaultProps = {
  isOn: false,
};

export default SwitchButton;
