import React from 'react';

import List from 'components/atoms/List/List.style';
import { generateUnicId } from 'helpers';
import { StyledListItem, InnerWrapper, StyledParagraph, StyledHeadline } from './AboutList.style';

const aboutData = [
  {
    key: generateUnicId(),
    title: 'szybkie dodawanie transakcji',
    label: 'dodawnanie nowych transakcji w prosty spowów. Wystarczy wpisać kwotę',
  },
  {
    key: generateUnicId(),
    title: 'szybki wgląd w wydadki',
    label: 'możliwość dodawania wydatków w ciągu dnia.',
  },
  {
    key: generateUnicId(),
    title: 'poglądowe wykresy',
    label: 'przeglądaj dochody i wydatki w sposób graficzny',
  },
  {
    key: generateUnicId(),
    title: 'śledzenie długów i oszczędności',
    label: 'wgląd w saldo portfela',
  },
  {
    key: generateUnicId(),
    title: 'kategorie',
    label: 'dodawaj własne kategorie wydatków i wpływów',
  },
  {
    key: generateUnicId(),
    title: 'dark mode',
    label: 'możliwość dostosowania wyglądu aplikacji do swoich preferencji',
  },
  {
    key: generateUnicId(),
    title: 'Notatki',
    label: 'możliwość dostosowania własnych notatek',
  },
];

const AboutList = () => {
  const listItems = aboutData.map(({ key, title, label }) => (
    <StyledListItem key={key}>
      <InnerWrapper>
        <StyledHeadline primaryColor as="h4">
          {title}
        </StyledHeadline>
        <StyledParagraph>{label}</StyledParagraph>
      </InnerWrapper>
    </StyledListItem>
  ));

  return <List>{listItems}</List>;
};

export default AboutList;
