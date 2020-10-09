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

const Input = ({
  tag,
  type,
  name,
  label,
  maxLength,
  value,
  isError,
  errorMessage,
  defaultFocus,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(defaultFocus);

  return (
    <StyledWrapper>
      <StyledInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => !value && setIsFocused(false)}
        isFocused={isFocused}
        value={value}
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
  defaultFocus: PropTypes.bool,
};

Input.defaultProps = {
  tag: 'input',
  type: 'text',
  maxLength: 200,
  value: '',
  isError: false,
  errorMessage: '',
  defaultFocus: true,
};
export default Input;
