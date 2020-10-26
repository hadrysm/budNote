import React, { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Headline from 'components/atoms/Headline';
import Spinner from 'components/atoms/Spinner';
import Input from 'components/atoms/Input';
import { AuthContext } from 'context/AuthContext';
import { FormWrapper, StyledButton, StyledForm, AbsWrapper } from './LoginForm.style';

const initialValues = { email: '', password: '' };

const validate = ({ email, password }) => {
  const numbers = /[0-9]/g;

  const errors = {};
  if (!email) {
    errors.email = 'Pole jest wymagane';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = 'Niepoprawny format email';
  }

  if (!password) {
    errors.password = 'Pole jest wymagane';
  } else if (password.length < 6) {
    errors.password = 'Hasło musi być dłuższe';
  } else if (!password.match(numbers)) {
    errors.password = 'Hasło musi zawierać liczbę';
  }
  return errors;
};

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const { handleSignUp, handleLogin } = useContext(AuthContext);
  const isLoading = useSelector(({ auth }) => auth.loading);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: ({ email, password }) => {
      if (isLogin) {
        handleLogin(email, password);
      } else {
        handleSignUp(email, password);
      }
    },
  });
  return (
    <FormWrapper>
      <Headline>{isLogin ? 'zaloguj się' : 'swtórz konto'}</Headline>
      <AnimatePresence>
        {isLoading && (
          <AbsWrapper>
            <Spinner />
          </AbsWrapper>
        )}
      </AnimatePresence>
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
      <StyledButton createAccount secondary onClick={() => setIsLogin((prevState) => !prevState)}>
        {isLogin ? 'stwórz konto' : 'zaloguj sie'}
      </StyledButton>
    </FormWrapper>
  );
};
export default LoginForm;
