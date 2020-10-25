import React from 'react';
import PropTypes from 'prop-types';

import TransitionContextProvider from 'context/TransitionContextProvider';
import TemplateTransition from 'components/Organisms/TemplateTransition/TemplateTransition';
import { Wrapper } from './Layout.style';

const Layout = ({ children }) => {
  return (
    <TransitionContextProvider>
      <Wrapper>{children}</Wrapper>
      <TemplateTransition />
    </TransitionContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
