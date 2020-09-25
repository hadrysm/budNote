import { useState, useRef, useEffect, useCallback } from 'react';

export const useClickElement = () => {
  const [isFocused, setFocus] = useState(false);
  const ref = useRef(null);

  const handleClickOnElement = (e) => {
    if (!ref.current.contains(e.target)) setFocus(false);
    else if (ref.current.contains(e.target)) setFocus(true);
  };

  const handleClickCallback = useCallback(handleClickOnElement, [ref]);

  useEffect(() => {
    document.addEventListener('click', handleClickCallback);

    return () => document.removeEventListener('click', handleClickCallback);
  }, [handleClickCallback]);

  return [isFocused, ref];
};
