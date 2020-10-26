import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'templates/Layout';
import Sidebar from 'components/organisms/Sidebar';

import { Wrapper, InnerWrapper, Main, Container } from './PanelTemplate.style';

const PanelTemplate = ({ children }) => {
  return (
    <Layout>
      <Container>
        <Sidebar />
        <Wrapper>
          <InnerWrapper>
            <Main>{children}</Main>
          </InnerWrapper>
        </Wrapper>
      </Container>
    </Layout>
  );
};

PanelTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PanelTemplate;
