import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import LoginForm from 'components/molecules/LoginForm/LoginForm';
import image from 'assets/image/image2.svg';
import Section from 'components/atoms/Section/Section.style';
import { StyledSection } from './LoginPage.style';

// test - remove later motion

const LoginPage = () => {
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
