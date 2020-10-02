import React from 'react';
import { useSelector } from 'react-redux';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import LoginForm from 'components/molecules/LoginForm/LoginForm';
import image from 'assets/image/image2.svg';
import Section from 'components/atoms/Section/Section.style';
import routes from 'routes';
import MotionRedirect from 'components/hoc/MotionRedirect/MotionRedirect';
import { StyledSection } from './LoginPage.style';

const LoginPage = () => {
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  if (isAuth) return <MotionRedirect to={routes.notes} />;

  return (
    <Wrapper withVariants isFlex>
      <StyledSection maxWidth="45" withVariants>
        <img src={image} alt="" />
      </StyledSection>
      <Section>
        <LoginForm />
      </Section>
    </Wrapper>
  );
};

export default LoginPage;
