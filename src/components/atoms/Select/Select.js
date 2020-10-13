import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, label, options, ...props }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
      {/* <div>error</div> */}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Select;
