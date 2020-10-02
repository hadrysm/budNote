import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Navigation from 'components/Organisms/Navigation/Navigation';
import Sidebar from 'components/Organisms/Sidebar/Sidebar';

import { Main, InnerWrapper } from './PageTemplate.style';

const PageTemplate = ({ children }) => {
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  return (
    <Wrapper maxWidth>
      <InnerWrapper>
        <AnimatePresence>{isAuth ? <Sidebar /> : <Navigation />}</AnimatePresence>
        <Main>{children}</Main>
      </InnerWrapper>
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
