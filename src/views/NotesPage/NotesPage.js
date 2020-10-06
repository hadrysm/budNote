import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';

const NotesPage = () => {
  return (
    <Wrapper withVariants>
      <PageTitle screenRenderOnly>notatki</PageTitle>

      <Section>
        <Headline customFontSize="3.5">Notatki</Headline>
        <Paragraph>Liczba notatek: 4</Paragraph>
      </Section>
    </Wrapper>
  );
};

export default NotesPage;
