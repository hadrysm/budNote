import React from 'react';
import { useLocation } from 'react-router-dom';

import Wrapper from 'components/atoms/Wrapper';

const NotFoundPage = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper withVariants>
      <h3>
        Nie mogliśmy znaleść takiego adresu <code>{pathname}</code>
      </h3>
    </Wrapper>
  );
};

export default NotFoundPage;
