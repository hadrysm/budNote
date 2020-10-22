import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { themeDark, themeLight } from 'theme/mainTheme';
import { themeColorType } from 'store/settings/types';
import GlobalStyled from 'theme/GlobalStyled';
import AuthProvider from 'context/AuthContext';

const MainTemplate = ({ children }) => {
  const theme = useSelector(({ settings }) => settings.colorTheme);
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  return (
    <AuthProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme === themeColorType.DARK ? themeDark : themeLight}>
        <GlobalStyled isAuth={isAuth} />
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
