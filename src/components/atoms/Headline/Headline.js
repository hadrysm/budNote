import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeadline } from './Headline.style';

const Headline = ({ children, customFontSize }) => (
  <StyledHeadline customFontSize={customFontSize}>{children}</StyledHeadline>
);

Headline.propTypes = {
  children: PropTypes.string.isRequired,
  customFontSize: PropTypes.string,
};

Headline.defaultProps = {
  customFontSize: '',
};

export default Headline;
