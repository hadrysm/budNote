import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useToggleNav = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const location = useLocation();

  const handleToggleMenuVisibility = () => setMenuVisibility((prevState) => !prevState);

  useEffect(() => {
    setMenuVisibility(false);
  }, [location]);

  useEffect(() => {
    if (isMenuVisible) window.scrollTo(0, 0);
  }, [isMenuVisible]);

  return [isMenuVisible, handleToggleMenuVisibility];
};
