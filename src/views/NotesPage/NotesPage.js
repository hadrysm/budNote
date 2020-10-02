import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Button from 'components/atoms/Button/Button.style';

import { useAuthUser } from 'hooks/useAuthUser';

const NotesPage = () => {
  const { signout } = useAuthUser();

  return (
    <Wrapper withVariants>
      <Button onClick={signout}>wyloguj</Button>
    </Wrapper>
  );
};

export default NotesPage;
