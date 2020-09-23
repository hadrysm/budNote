import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import AboutList from 'components/molecules/AboutList/AboutList';

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
        <Headline customFontSize="2.5">Najważniejsze funkcje</Headline>
        <AboutList />
      </Section>
    </Wrapper>
  );
};

export default AboutPage;
