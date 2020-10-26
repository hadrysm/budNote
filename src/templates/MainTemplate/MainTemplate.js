import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import Head from 'components/organisms/Head';
import GlobalStyled from 'theme/GlobalStyled';
import AuthProvider from 'context/AuthContext';
import { themeDark, themeLight } from 'theme/mainTheme';
import { themeColorType } from 'store/settings/types';

const MainTemplate = ({ children }) => {
  const theme = useSelector(({ settings }) => settings.colorTheme);

  return (
    <HelmetProvider>
      <AuthProvider>
        <Head />
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
