import React, { useState } from 'react';
import { useFormik } from 'formik';

import Headline from 'components/atoms/Headline/Headline.style';
import Input from 'components/atoms/Input/Input';
import { FormWrapper, StyledButton, StyledForm } from './LoginForm.style';

const initialValues = { email: '', password: '' };

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Pole jest wymagane';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Niepoprawny format email';
  }

  if (!values.password) {
    errors.password = 'Pole jest wymagane';
  } else if (values.password.length < 6) {
    errors.password = 'Hasło musi być dłuższe';
  }
  return errors;
};

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleSwitchAuthMood = () => setIsLogin((prevState) => !prevState);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <FormWrapper>
      <Headline>{isLogin ? 'zaloguj się' : 'swtórz konto'}</Headline>
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <Input
            type="email"
            name="email"
            label="email"
            onChange={handleChange}
            value={values.email}
            isError={errors.email && touched.email}
            errorMessage={errors.email}
          />
          <Input
            type="password"
            name="password"
            label="hasło"
            onChange={handleChange}
            value={values.password}
            isError={errors.password && touched.password}
            errorMessage={errors.password}
          />
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
