import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import { Wrapper, BoxWrapper } from './Modal.style';

const Modal = ({ title, children }) => {
  return (
    <Wrapper>
      <BoxWrapper>
        <Headline>{title}</Headline>
        {children}
      </BoxWrapper>
    </Wrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

Modal.defaultProps = {
  title: 'title',
};

export default Modal;
