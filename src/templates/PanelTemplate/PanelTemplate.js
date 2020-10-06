import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'components/Organisms/Sidebar/Sidebar';

import { Wrapper, InnerWrapper, Main, Container } from './PanelTemplate.style';

const PanelTemplate = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <InnerWrapper>
          <Main>{children}</Main>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

PanelTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelTemplate;
