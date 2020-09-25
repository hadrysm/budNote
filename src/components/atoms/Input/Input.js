import React from 'react';
import PropTypes from 'prop-types';

// import { useClickElement } from 'hooks/useClickElement';
import { StyledWrapper, StyledInput, StyledLabel } from './Input.style';

const Input = ({ tag, type, name, label, maxLength, required, ...props }) => {
  // const [isFocused, ref] = useClickElement();

  return (
    <StyledWrapper>
      <StyledInput
        as={tag}
        type={type}
        name={name}
        id={name}
        required={required}
        maxLength={maxLength}
        {...props}
      />
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
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
