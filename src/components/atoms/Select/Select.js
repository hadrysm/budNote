import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import { Wrapper, Label, StyledSelect, Option, FeedbackSelect } from './Select.style';

const Select = ({ name, label, options, isError, errorMessage, ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect id={name} name={name} {...props}>
        <Option value="">wybierz...</Option>
        {options.map(({ value, displayValue }) => (
          <Option key={value} value={value}>
            {displayValue}
          </Option>
        ))}
      </StyledSelect>
      <AnimatePresence>
        {isError && <FeedbackSelect>{errorMessage}</FeedbackSelect>}
      </AnimatePresence>
    </Wrapper>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Select.defaultProps = {
  isError: false,
  errorMessage: '',
};

export default Select;
