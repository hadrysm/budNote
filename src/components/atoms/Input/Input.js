import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Wrapper, StyledInput, Label, InputLineBar, FeedbackInput } from './Input.style';

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
    <Wrapper>
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
      <InputLineBar isFocused={isFocused} isError={isError} />
      <Label isFocused={isFocused} htmlFor={name}>
        {label}
      </Label>
      <AnimatePresence>{isError && <FeedbackInput>{errorMessage}</FeedbackInput>}</AnimatePresence>
    </Wrapper>
  );
};

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  defaultFocus: false,
};
export default Input;
