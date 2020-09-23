import React from 'react';

import routes from 'routes';

import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import undrawImage from 'assets/image/undraw.svg';
import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import { StyledHeadline, StyledButton } from './HomePage.style';

const HomePage = () => (
  <Wrapper withVariants isFlex isColumn>
    <PageTitle screenRenderOnly>strona głowna</PageTitle>
    <Section>
      <StyledHeadline>wszystko razem</StyledHeadline>
      <Paragraph>
        Kiedy jesteś na szczycie swoich zarobków, życie jest dobre. Pomagamy Ci bez wysiłku
        zarządzać Twoimi finansami w jednym miejscu.
      </Paragraph>
    </Section>
    <Section withVariants>
      <LinkItem to={routes.login}>
        <StyledButton>spróbuj za darmo</StyledButton>
      </LinkItem>
      <LinkItem to={routes.about}>
        <StyledButton secondary>dowiec się więcej</StyledButton>
      </LinkItem>
    </Section>
    <Section withVariants maxWidth="35" withMargin="3">
      <img src={undrawImage} alt="" />
    </Section>
  </Wrapper>
);

export default HomePage;
