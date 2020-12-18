import React, { useContext, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { TransitionContext } from 'context/TransitionContextProvider';
import { TransitionWrapper, Rectangle } from './TemplateTransition.style';

const TemplateTransition = () => {
  const { transition } = useContext(TransitionContext);
  const [playState, setPlayState] = useState(transition);

  useEffect(() => {
    setPlayState(transition);
  }, [transition]);

  return (
    <AnimatePresence>
      {playState && (
        <TransitionWrapper>
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
        </TransitionWrapper>
      )}
    </AnimatePresence>
  );
};

export default TemplateTransition;
