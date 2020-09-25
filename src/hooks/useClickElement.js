import { useState, useRef, useEffect, useCallback } from 'react';

export const useClickElement = () => {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(null);

  const handleClickOnElement = (e) => {
    if (!ref.current.contains(e.target)) setIsClicked(false);
    else if (ref.current.contains(e.target)) setIsClicked(true);
  };

  const handleClickCallback = useCallback(handleClickOnElement, [ref]);

  useEffect(() => {
    document.addEventListener('click', handleClickCallback);

    return () => document.removeEventListener('click', handleClickCallback);
  }, [handleClickCallback]);

  return [isClicked, ref];
};
