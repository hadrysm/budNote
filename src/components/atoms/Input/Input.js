import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper, StyledInput, StyledLabel, StyledInputLineBar } from './Input.style';

const Input = ({ tag, type, name, label, maxLength, required, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledWrapper>
      <StyledInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        isFocused={isFocused}
        as={tag}
        type={type}
        name={name}
        id={name}
        required={required}
        maxLength={maxLength}
        {...props}
      />
      <StyledInputLineBar isFocused={isFocused} />
      <StyledLabel isFocused={isFocused} htmlFor={name}>
        {label}
      </StyledLabel>
    </StyledWrapper>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  tag: 'input',
  type: 'text',
  required: true,
  maxLength: 200,
};
export default Input;
