import React from 'react';
import PropTypes from 'prop-types';

import { StyledParagraph } from './Paragraph.styled';

const Paragraph = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
