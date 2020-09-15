import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './Button.style';

const Button = ({ children, ...props }) => {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
