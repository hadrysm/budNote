import React from 'react';
import { useSelector } from 'react-redux';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Popup from 'components/molecules/Popup/Popup';
import LoginForm from 'components/molecules/LoginForm/LoginForm';
import image from 'assets/image/image2.svg';
import Section from 'components/atoms/Section/Section.style';
import { StyledSection } from './LoginPage.style';

const LoginPage = () => {
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  console.log(isAuth);

  return (
    <Wrapper withVariants isFlex>
      <StyledSection maxWidth="45" withVariants>
        <img src={image} alt="" />
      </StyledSection>
      <Section>
        <LoginForm />
      </Section>
      <Popup message="Udało się zalogować" />
    </Wrapper>
  );
};

export default LoginPage;
