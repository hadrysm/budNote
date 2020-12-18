import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper';
import Modal from 'components/molecules/Modal';
import Section from 'components/atoms/Section';
import Spinner from 'components/atoms/Spinner';
import PageTitle from 'components/atoms/PageTitle';
import Headline from 'components/atoms/Headline';
import Paragraph from 'components/atoms/Paragraph';
import Task from 'components/molecules/Task';
import NoteForm from 'components/organisms/NoteForm';
import plusIcon from 'assets/icons/plus.svg';
import LinkItem from 'components/atoms/LinkItem';
import CollectionProvider from 'context/CollectionContext';

import { fetchNotestStart, fetchNotesSuccess, fetchNotesFail } from 'store/notes/actions';
import { db } from 'firebase/base';
import { GridWrapper, InnerWrapper, StyledButtonIcon } from './NotesPage.style';

const NotesPage = () => {
  const [isNoteFormVisible, setNoteFormVisible] = useState(false);

  const notesData = useSelector(({ notes }) => notes.notes);
  const isLoading = useSelector(({ notes }) => notes.loading);
  const uId = useSelector(({ auth }) => auth.uid);

  const collectionConfig = {
    collection: db.collection('users').doc(uId).collection('notes'),
    reduxActions: {
      fetchDataSuccess: fetchNotesSuccess,
      fetchStart: fetchNotestStart,
      fetchDataFail: fetchNotesFail,
    },
  };

  useEffect(() => {
    setNoteFormVisible(false);
  }, [notesData]);

  useEffect(() => {
    if (isNoteFormVisible) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [isNoteFormVisible]);

  return (
    <CollectionProvider collectionConfig={collectionConfig}>
      <Wrapper withVariants maxWidth>
        <InnerWrapper>
          <PageTitle screenRenderOnly>notatki</PageTitle>

          <Section maxWidth="100">
            <Headline customFontSize="3.5">Notatki</Headline>
            <Paragraph>Liczba notatek: {notesData.length}</Paragraph>
            <AnimatePresence>{isLoading && <Spinner />}</AnimatePresence>
          </Section>

          <Section maxWidth="100">
            <AnimatePresence exitBeforeEnter>
              <GridWrapper>
                {!notesData.length && <Paragraph>Dodaj pierwszą notatkę</Paragraph>}

                {notesData.map(({ id, title, content, createAt }) => (
                  <LinkItem to={id} key={id}>
                    <Task title={title} content={content} createAt={createAt} />
                  </LinkItem>
                ))}
              </GridWrapper>
            </AnimatePresence>
          </Section>
        </InnerWrapper>
      </Wrapper>

      <AnimatePresence>
        {isNoteFormVisible && (
          <Modal title="twoja notatka" closeModalFn={() => setNoteFormVisible(false)}>
            <NoteForm />
          </Modal>
        )}
      </AnimatePresence>
      <StyledButtonIcon
        icon={plusIcon}
        onClick={() => setNoteFormVisible((prevState) => !prevState)}
      />
    </CollectionProvider>
  );
};

export default NotesPage;
