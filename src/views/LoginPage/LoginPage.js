import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper';
import PageTitle from 'components/atoms/PageTitle';
import LoginForm from 'components/molecules/LoginForm';
import Popup from 'components/molecules/Popup';
import image from 'assets/image/image2.svg';
import Section from 'components/atoms/Section';
import routes from 'routes';
import { clearAuthError } from 'store/auth/actions';

import { useAnimateTemplate } from 'hooks/useAnimateTemplate';
import { StyledSection } from './LoginPage.style';

const LoginPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(({ auth }) => auth.error);
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;
  const idSetTimeout = useRef(0);

  useAnimateTemplate(routes.budget, isAuth);

  useEffect(() => {
    if (error) {
      idSetTimeout.current = setTimeout(() => {
        dispatch(clearAuthError());
      }, 3000);
    }

    return () => clearTimeout(idSetTimeout.current);
  }, [error, dispatch]);

  return (
    <>
      <Wrapper withVariants isFlex>
        <PageTitle screenRenderOnly>login</PageTitle>
        <StyledSection maxWidth="45" withVariants>
          <img src={image} alt="" />
        </StyledSection>
        <Section>
          <LoginForm />
        </Section>
      </Wrapper>
      <AnimatePresence exitBeforeEnter>
        {error && <Popup message={error} isError />}
      </AnimatePresence>
    </>
  );
};

export default LoginPage;
