import { TransitionContext } from 'context/TransitionContextProvider';
import { useContext, useEffect, useRef } from 'react';

import { useHistory } from 'react-router-dom';

export const useAnimateTemplate = (to, runAnimate) => {
  const { setTransition } = useContext(TransitionContext);
  const { push } = useHistory();

  const idTimeOut = useRef(0);

  useEffect(() => {
    if (runAnimate) {
      setTransition(false);

      idTimeOut.current = setTimeout(() => {
        push(to);
      }, 1800);
    }

    return () => {
      clearTimeout(idTimeOut.current);
    };
  }, [runAnimate, setTransition, push, to]);
};
