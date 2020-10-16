import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import plusIcon from 'assets/icons/plus.svg';
import { Wrapper, BoxWrapper, CloseButton } from './Modal.style';

const Modal = ({ title, children, secondary, closeModalFn, small }) => {
  return (
    <Wrapper>
      <BoxWrapper secondary={secondary} small={small}>
        <Headline>{title}</Headline>
        {secondary && <CloseButton icon={plusIcon} onClick={closeModalFn} />}
        {children}
      </BoxWrapper>
    </Wrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  closeModalFn: PropTypes.func,
};

Modal.defaultProps = {
  title: 'title',
  secondary: false,
  small: false,
  closeModalFn: null,
};

export default Modal;
