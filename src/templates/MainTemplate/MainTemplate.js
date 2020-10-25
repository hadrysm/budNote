import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { themeDark, themeLight } from 'theme/mainTheme';
import { themeColorType } from 'store/settings/types';
import GlobalStyled from 'theme/GlobalStyled';
import AuthProvider from 'context/AuthContext';

const MainTemplate = ({ children }) => {
  const theme = useSelector(({ settings }) => settings.colorTheme);

  return (
    <HelmetProvider>
      <AuthProvider>
        <Helmet>
          <title>budNote</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <ThemeProvider theme={theme === themeColorType.DARK ? themeDark : themeLight}>
          <GlobalStyled />
          {children}
        </ThemeProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MainTemplate;
