import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import routes from 'routes';

import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import undrawImage from 'assets/image/undraw.svg';
import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import { TransitionContext } from 'context/TransitionContextProvider';
import { StyledHeadline, StyledButton } from './HomePage.style';

const HomePage = () => {
  const { push } = useHistory();
  const { setTransition } = useContext(TransitionContext);
  const isAuth = useSelector(({ auth }) => auth.uid) !== null;

  const handleChangeTemplate = () => {
    if (!isAuth) {
      push(routes.login);
      return;
    }
    setTransition(false);
    setTimeout(() => {
      push(routes.budget);
    }, 1800);
  };

  return (
    <Wrapper withVariants isFlex isColumn>
      <PageTitle screenRenderOnly>strona głowna</PageTitle>
      <Section>
        <StyledHeadline>wszystko razem</StyledHeadline>
        <Paragraph>
          Kiedy jesteś na szczycie swoich zarobków, życie jest dobre. Pomagamy Ci bez wysiłku
          zarządzać Twoimi finansami w jednym miejscu.
        </Paragraph>
      </Section>
      <Section withVariants isFlex>
        {/* <LinkItem to={isAuth ? routes.budget : routes.login}> */}
        <StyledButton onClick={handleChangeTemplate}>spróbuj za darmo</StyledButton>
        {/* </LinkItem> */}
        <LinkItem to={routes.about}>
          <StyledButton secondary>dowiec się więcej</StyledButton>
        </LinkItem>
      </Section>
      <Section withVariants maxWidth="35" withMargin="3">
        <img src={undrawImage} alt="" />
      </Section>
    </Wrapper>
  );
};

export default HomePage;
