import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Section from 'components/atoms/Section/Section.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Task from 'components/molecules/Task/Task';
import NewNoteBar from 'components/Organisms/NewNoteBar/NewNoteBar';
import plusIcon from 'assets/icons/plus.svg';

import { useNotes } from 'hooks/useNotes';
import { GridWrapper, InnerWrapper, StyledButtonIcon } from './NotesPage.style';

const NotesPage = () => {
  const [isNewNoteBarVisible, setNewNoteBarVisible] = useState(false);
  const { handleAddNote, handleDeleteNote } = useNotes();

  const notesData = useSelector(({ notes }) => notes.notes);

  const handleAddNewNote = (value) => {
    setNewNoteBarVisible(false);
    handleAddNote(value);
  };

  return (
    <>
      <Wrapper withVariants maxWidth>
        <InnerWrapper>
          <PageTitle screenRenderOnly>notatki</PageTitle>

          <Section maxWidth="100">
            <Headline customFontSize="3.5">Notatki</Headline>
            <Paragraph>Liczba notatek: {notesData.length}</Paragraph>
          </Section>

          <Section maxWidth="100">
            <AnimatePresence exitBeforeEnter>
              <GridWrapper>
                {!notesData.length && <Paragraph>Dodaj pierwszą notatkę</Paragraph>}

                {notesData.map(({ id, title, content, createNoteData }) => (
                  <Task
                    key={id}
                    id={id}
                    title={title}
                    content={content}
                    createNoteData={createNoteData}
                    handleDeleteNotes={handleDeleteNote}
                  />
                ))}
              </GridWrapper>
            </AnimatePresence>
          </Section>
        </InnerWrapper>
      </Wrapper>
      <AnimatePresence exitBeforeEnter>
        {isNewNoteBarVisible && <NewNoteBar handleAddNote={handleAddNewNote} />}
      </AnimatePresence>
      <StyledButtonIcon
        icon={plusIcon}
        onClick={() => setNewNoteBarVisible((prevState) => !prevState)}
      />
    </>
  );
};

export default NotesPage;
