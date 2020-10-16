import { useEffect, useCallback, useRef } from 'react';

export const useClickOutside = (callback) => {
  const ref = useRef(null);

  const handleClick = (e) => {
    if (!ref.current.contains(e.target)) callback();
  };

  const handleClickCallback = useCallback(handleClick, [callback, ref]);

  useEffect(() => {
    document.addEventListener('click', handleClickCallback);

    return () => document.removeEventListener('click', handleClickCallback);
  }, [handleClickCallback]);

  return ref;
};
