import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Section from 'components/atoms/Section/Section.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import emailIcon from 'assets/icons/email.svg';
import githubIcon from 'assets/icons/github.svg';
import ContactList from 'components/molecules/ContactList/ContactList';
import { generateUnicId } from 'helpers';
import { StyledParagraph, StyledHeadline, StyledSection } from './ContactPage.style';

const contactData = [
  {
    key: generateUnicId(),
    icon: emailIcon,
    label: 'm.hadrys.95@gmail.com',
  },
  {
    key: generateUnicId(),
    icon: githubIcon,
    label: '@hadrysm',
  },
];

const ContactPage = () => {
  return (
    <Wrapper withVariants>
      <PageTitle screenRenderOnly>kontakt</PageTitle>
      <StyledSection isFlex>
        <StyledHeadline customFontSize={4}>Kontakt budNote</StyledHeadline>
        <StyledParagraph>Skontaktuj się z nami!</StyledParagraph>
      </StyledSection>
      <Section>
        <ContactList listItemsData={contactData} />
      </Section>
    </Wrapper>
  );
};

export default ContactPage;
