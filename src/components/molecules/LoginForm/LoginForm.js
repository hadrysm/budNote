import React, { useState } from 'react';

import Headline from 'components/atoms/Headline/Headline.style';
import Input from 'components/atoms/Input/Input';

import { FormWrapper, StyledButton, StyledForm } from './LoginForm.style';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchAuthMood = () => setIsLogin((prevState) => !prevState);

  return (
    <FormWrapper>
      <Headline>{isLogin ? 'zaloguj się' : 'swtórz konto'}</Headline>
      <StyledForm action="/" autocomplete="off">
        <div>
          <Input label="email" name="email" />
          <Input type="password" name="password" label="hasło" />
        </div>
        <StyledButton type="submit">{isLogin ? 'zaloguj się' : 'swtórz konto'}</StyledButton>
      </StyledForm>
      <StyledButton createAccount secondary onClick={handleSwitchAuthMood}>
        {isLogin ? 'stwórz konto' : 'zaloguj sie'}
      </StyledButton>
    </FormWrapper>
  );
};

export default LoginForm;
