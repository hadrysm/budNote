import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Input from 'components/atoms/Input/Input';

// test - remove later motion

const LoginPage = () => {
  return (
    <Wrapper withVariants>
      <Input name="email" label="email" />
      <Input tag="textarea" name="text" label="text" />
    </Wrapper>
  );
};

export default LoginPage;
