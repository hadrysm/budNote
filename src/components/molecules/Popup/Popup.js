import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledParagraph } from './Popup.style';

const Popup = ({ message, isError, isSuccess }) => {
  return (
    <Wrapper isError={isError} isSuccess={isSuccess}>
      <StyledParagraph>{message}</StyledParagraph>
    </Wrapper>
  );
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool,
  isSuccess: PropTypes.bool,
};

Popup.defaultProps = {
  isError: false,
  isSuccess: false,
};

export default Popup;
