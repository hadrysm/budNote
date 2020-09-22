import React from 'react';

import { childrenVariants } from 'variants';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import undrawImage from 'assets/image/undraw.svg';
import { Wrapper, StyledHeadline, StyledButton } from './HomePage.style';

const HomePage = () => (
  <Wrapper initial="hidden" animate="visible" exit="exit">
    <PageTitle screenRenderOnly>strona głowna</PageTitle>
    <Section maxWidth="60">
      <StyledHeadline>to wszystko razem</StyledHeadline>
      <Paragraph>
        Kiedy jesteś na szczycie swoich zarobków, życie jest dobre. Pomagamy Ci bez wysiłku
        zarządzać Twoje finanse w jednym miejscu.
      </Paragraph>
    </Section>
    <Section variants={childrenVariants}>
      <StyledButton>spróbuj za darmo</StyledButton>
      <StyledButton secondary>dowiec się więcej</StyledButton>
    </Section>
    <Section variants={childrenVariants} maxWidth="30" withMargin="3">
      <img src={undrawImage} alt="" />
    </Section>
  </Wrapper>
);

export default HomePage;
