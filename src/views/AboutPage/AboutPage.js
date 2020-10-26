import React from 'react';

import Wrapper from 'components/atoms/Wrapper';
import PageTitle from 'components/atoms/PageTitle';
import Section from 'components/atoms/Section';
import Headline from 'components/atoms/Headline';
import Paragraph from 'components/atoms/Paragraph';
import AboutList from 'components/molecules/AboutList';
import { generateUnicId } from 'helpers';

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

const AboutPage = () => {
  return (
    <Wrapper withVariants>
      <PageTitle screenRenderOnly>o nas</PageTitle>
      <Section>
        <Paragraph>
          Aplikacja ta pokaże Ci, na co wydajesz swoje pieniądze. Śledzenie finansów na pewno nie
          należy do najprzyjemniejszych zadań na świecie i wymaga pewnych zdolności oraz wiedzy.
          Dlatego stworzyłem ją, aby pomóc Ci, w każdej chwili, śledzić swoje wydatki.
        </Paragraph>
        <Paragraph withMargin="2">
          Aplikacja w wygodny sposób pozwoli kontrolować wydawane pieniądze a wbudowane raporty
          prezentujące wydatki zmotywują do oszczędzania.
        </Paragraph>
      </Section>

      <Section>
        <Headline customFontSize={2.5}>Najważniejsze funkcje</Headline>
        <AboutList listItemsData={aboutData} />
      </Section>
    </Wrapper>
  );
};

export default AboutPage;
