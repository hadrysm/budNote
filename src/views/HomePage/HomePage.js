import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import routes from 'routes';

import PageTitle from 'components/atoms/PageTitle';
import Section from 'components/atoms/Section';
import Paragraph from 'components/atoms/Paragraph';
import LinkItem from 'components/atoms/LinkItem';
import undrawImage from 'assets/image/undraw.svg';
import Wrapper from 'components/atoms/Wrapper';
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
        <StyledHeadline>aplikacja budżetowa</StyledHeadline>
        <Paragraph>
          Darmowa aplikacja do planowania budżetu domowego, zapisywania wydatków, kontroli i
          zarządzania domowymi finansami.
        </Paragraph>
      </Section>
      <Section withVariants isFlex>
        <StyledButton onClick={handleChangeTemplate}>spróbuj za darmo</StyledButton>
        <LinkItem to={routes.about}>
          <StyledButton secondary>dowiedz się więcej</StyledButton>
        </LinkItem>
      </Section>
      <Section withVariants maxWidth="35" withMargin="3">
        <img src={undrawImage} alt="" />
      </Section>
    </Wrapper>
  );
};

export default HomePage;
