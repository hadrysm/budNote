import React, { useState } from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Section from 'components/atoms/Section/Section.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Task from 'components/molecules/Task/Task';
import NewNoteBar from 'components/Organisms/NewNoteBar/NewNoteBar';
import plusIcon from 'assets/icons/plus.svg';

import { AnimatePresence } from 'framer-motion';
import { GridWrapper, InnerWrapper, StyledButtonIcon } from './NotesPage.style';

const NotesPage = () => {
  const [isNewNoteBarVisible, setNewNoteBarVisible] = useState(false);

  return (
    <>
      <Wrapper withVariants maxWidth>
        <InnerWrapper>
          <PageTitle screenRenderOnly>notatki</PageTitle>

          <Section>
            <Headline customFontSize="3.5">Notatki</Headline>
            <Paragraph>Liczba notatek: 4</Paragraph>
          </Section>

          <Section>
            <GridWrapper>
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </GridWrapper>
          </Section>
        </InnerWrapper>
      </Wrapper>
      <AnimatePresence exitBeforeEnter>{isNewNoteBarVisible && <NewNoteBar />}</AnimatePresence>
      <StyledButtonIcon
        icon={plusIcon}
        onClick={() => setNewNoteBarVisible((prevState) => !prevState)}
      />
    </>
  );
};

export default NotesPage;
