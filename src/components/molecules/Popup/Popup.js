import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, StyledParagraph } from './Popup.style';

const Popup = ({ message }) => {
  return (
    <Wrapper>
      <StyledParagraph>{message}</StyledParagraph>
    </Wrapper>
  );
};

Popup.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Popup;
