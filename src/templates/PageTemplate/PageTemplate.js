import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Navigation from 'components/Organisms/Navigation/Navigation';

import { Main, InnerWrapper } from './PageTemplate.style';

const PageTemplate = ({ children }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Navigation />
        <Main>{children}</Main>
      </InnerWrapper>
    </Wrapper>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTemplate;
