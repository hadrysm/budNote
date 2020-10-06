import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Task from 'components/molecules/Task/Task';

import { StyledSection, GridWrapper, InnerWrapper } from './NotesPage.style';

const NotesPage = () => {
  return (
    <Wrapper withVariants>
      <InnerWrapper>
        <PageTitle screenRenderOnly>notatki</PageTitle>

        <StyledSection>
          <Headline customFontSize="3.5">Notatki</Headline>
          <Paragraph>Liczba notatek: 4</Paragraph>
        </StyledSection>

        <GridWrapper>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </GridWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default NotesPage;
