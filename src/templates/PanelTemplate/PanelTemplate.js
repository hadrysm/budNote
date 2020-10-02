import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'components/Organisms/Sidebar/Sidebar';
import { Wrapper, InnerWrapper, Main } from './PanelTemplate.style';

const PanelTemplate = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Wrapper>
        <InnerWrapper>
          <Main>{children}</Main>
        </InnerWrapper>
      </Wrapper>
    </>
  );
};

PanelTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PanelTemplate;
