import React from 'react';

import routes from 'routes';

import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import undrawImage from 'assets/image/undraw.svg';
import { Wrapper, StyledHeadline, StyledButton } from './HomePage.style';

const HomePage = () => (
  <Wrapper>
    <PageTitle screenRenderOnly>strona głowna</PageTitle>
    <Section maxWidth="60">
      <StyledHeadline>to wszystko razem</StyledHeadline>
      <Paragraph>
        Kiedy jesteś na szczycie swoich zarobków, życie jest dobre. Pomagamy Ci bez wysiłku
        zarządzać Twoje finanse w jednym miejscu.
      </Paragraph>
    </Section>
    <Section witchVariants>
      <LinkItem to={routes.login}>
        <StyledButton>spróbuj za darmo</StyledButton>
      </LinkItem>
      <LinkItem to={routes.contact}>
        <StyledButton secondary>dowiec się więcej</StyledButton>
      </LinkItem>
    </Section>
    <Section witchVariants maxWidth="35" withMargin="3">
      <img src={undrawImage} alt="" />
    </Section>
  </Wrapper>
);

export default HomePage;
