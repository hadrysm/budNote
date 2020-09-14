import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { themeDark } from 'theme/mainTheme';
import GlobalStyled from 'theme/GlobalStyled';

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={themeDark}>
      <GlobalStyled />
      {children}
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
