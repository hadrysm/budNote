import React, { useContext, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import LoginForm from 'components/molecules/LoginForm/LoginForm';
import Popup from 'components/molecules/Popup/Popup';
import image from 'assets/image/image2.svg';
import Section from 'components/atoms/Section/Section.style';
import routes from 'routes';
import { clearAuthError } from 'store/auth/actions';
import { TransitionContext } from 'context/TransitionContextProvider';
import { StyledSection } from './LoginPage.style';

const LoginPage = () => {
  const idTimeOut = useRef(0);
  const { setTransition } = useContext(TransitionContext);
  const { push } = useHistory();
  const dispatch = useDispatch();
  const error = useSelector(({ auth }) => auth.error);
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;
  const idSetTimeout = useRef(0);

  useEffect(() => {
    if (isAuth) {
      setTransition(false);

      idTimeOut.current = setTimeout(() => {
        push(routes.budget);
      }, 1800);
    }

    return () => {
      clearTimeout(idTimeOut.current);
    };
  }, [isAuth, push, setTransition]);

  useEffect(() => {
    if (error) {
      idSetTimeout.current = setTimeout(() => {
        dispatch(clearAuthError());
      }, 3000);
    }

    return () => clearTimeout(idSetTimeout.current);
  }, [error, dispatch]);

  // if (isAuth) return <MotionRedirect to={routes.budget} />;

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
