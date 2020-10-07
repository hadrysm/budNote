import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Section from 'components/atoms/Section/Section.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Task from 'components/molecules/Task/Task';
import NewNoteBar from 'components/Organisms/NewNoteBar/NewNoteBar';
import plusIcon from 'assets/icons/plus.svg';

import { AnimatePresence } from 'framer-motion';
import { db } from 'firebase/base';
import { fetchNotesSuccess } from 'store/notes/actions';
import { GridWrapper, InnerWrapper, StyledButtonIcon } from './NotesPage.style';

const NotesPage = () => {
  const [isNewNoteBarVisible, setNewNoteBarVisible] = useState(false);

  const dispatch = useDispatch();
  const notesData = useSelector(({ notes }) => notes.notes);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await db.collection('notes').get();
      const notes = [];

      res.docs.map((doc) => notes.push({ id: doc.id, ...doc.data() }));

      dispatch(fetchNotesSuccess(notes));
    };

    fetchNotes();
  }, []);

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
            <GridWrapper>
              {!notesData.length && <Paragraph>Dodaj pierwszą notatkę</Paragraph>}
              {notesData.map(({ id, title, content }) => (
                <Task key={id} title={title} content={content} />
              ))}
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
