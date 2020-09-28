import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { themeColorType } from 'store/settings/types';
import { setThemeColor } from 'store/settings/action';

export const useDarkMode = () => {
  const [theme, setTheme] = useState(themeColorType.DARK);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (theme === themeColorType.DARK) {
      setTheme(themeColorType.LIGHT);
      dispatch(setThemeColor(themeColorType.LIGHT));
    } else {
      setTheme(themeColorType.DARK);
      dispatch(setThemeColor(themeColorType.DARK));
    }
  };

  return [theme, toggleTheme];
};
