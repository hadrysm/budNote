import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import { themeDark, themeLight } from 'theme/mainTheme';
import { themeColorType } from 'store/settings/types';
import GlobalStyled from 'theme/GlobalStyled';

const MainTemplate = ({ children }) => {
  const theme = useSelector(({ settings }) => settings.colorTheme);
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  return (
    <ThemeProvider theme={theme === themeColorType.DARK ? themeDark : themeLight}>
      <GlobalStyled isAuth={isAuth} />
      {children}
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
