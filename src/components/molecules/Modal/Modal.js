import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Headline from 'components/atoms/Headline';
import plusIcon from 'assets/icons/plus.svg';
import { useClickOutside } from 'hooks/useClickOutside';
import Spinner from 'components/atoms/Spinner';
import { Wrapper, BoxWrapper, CloseButton, SpinnerWrapper } from './Modal.style';

const Modal = ({ title, children, secondary, closeModalFn, small }) => {
  const modalRef = useClickOutside(closeModalFn);

  const isBudgetLoading = useSelector(({ budget }) => budget.loading);
  const isCategoryLoading = useSelector(({ settings }) => settings.loading);
  const isNotesLoading = useSelector(({ notes }) => notes.loading);

  return (
    <Wrapper>
      <BoxWrapper secondary={secondary} small={small} ref={modalRef}>
        <AnimatePresence>
          {(isBudgetLoading || isCategoryLoading || isNotesLoading) && (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          )}
        </AnimatePresence>
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
  closeModalFn: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
};

Modal.defaultProps = {
  title: 'title',
  secondary: false,
  small: false,
};

export default Modal;
