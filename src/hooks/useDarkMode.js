import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { themeColorType } from 'store/settings/types';
import { setThemeColor } from 'store/settings/action';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(themeColorType.DARK);

  const dispatch = useDispatch();

  const setMode = (mode) => {
    setTheme(mode);
    dispatch(setThemeColor(mode));
    window.localStorage.setItem('theme', mode);
  };

  const toggleTheme = () => {
    if (theme === themeColorType.DARK) {
      setMode(themeColorType.LIGHT);
    } else {
      setMode(themeColorType.DARK);
    }
  };

  const memoizedSetMode = useCallback(setMode, []);

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) memoizedSetMode(localTheme);
    else {
      memoizedSetMode(themeColorType.DARK);
    }
  }, [memoizedSetMode]);

  return [theme, toggleTheme];
};
