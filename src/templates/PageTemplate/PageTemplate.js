import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Navigation from 'components/Organisms/Navigation/Navigation';

import Layout from 'templates/Layout/Layout ';
import { Main, InnerWrapper } from './PageTemplate.style';

const PageTemplate = ({ children }) => {
  return (
    <Layout>
      <Wrapper maxWidth>
        <InnerWrapper>
          <Navigation />
          <Main>{children}</Main>
        </InnerWrapper>
      </Wrapper>
    </Layout>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PageTemplate;
