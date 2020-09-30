import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import {
  StyledWrapper,
  StyledInput,
  StyledLabel,
  StyledInputLineBar,
  FeedbackInput,
} from './Input.style';

const Input = ({ tag, type, name, label, maxLength, value, isError, errorMessage, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledWrapper>
      <StyledInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => !value && setIsFocused(false)}
        isFocused={isFocused}
        as={tag}
        type={type}
        name={name}
        id={name}
        maxLength={maxLength}
        {...props}
      />
      <StyledInputLineBar isFocused={isFocused} isError={isError} />
      <StyledLabel isFocused={isFocused} htmlFor={name}>
        {label}
      </StyledLabel>
      <AnimatePresence>{isError && <FeedbackInput>{errorMessage}</FeedbackInput>}</AnimatePresence>
    </StyledWrapper>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  tag: 'input',
  type: 'text',
  maxLength: 200,
  value: '',
  isError: false,
  errorMessage: '',
};
export default Input;
