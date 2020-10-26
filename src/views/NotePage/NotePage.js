import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Wrapper from 'components/atoms/Wrapper';
import Input from 'components/atoms/Input';
import Spinner from 'components/atoms/Spinner';

import { db } from 'firebase/base';
import routes from 'routes';

import { fetchNotestStart, fetchNotesSuccess, fetchNotesFail, addNote } from 'store/notes/actions';
import { useCollection } from 'hooks/useCollection';
import { InnerWrapper, StyledForm, StyledButton } from './NotePage.style';

const validate = ({ title, content }) => {
  const errors = {};
  if (!title) {
    errors.title = 'Pole jest wymagane';
  } else if (title.length < 3) {
    errors.title = 'Minimum 3 znaki';
  }

  if (!content) {
    errors.content = 'Pole jest wymagane';
  } else if (content.length < 10) {
    errors.content = 'Treść musi być dłuższa';
  } else if (content.length > 120) {
    errors.content = 'Treść musi być krótsza';
  }
  return errors;
};

const NotePage = () => {
  const uId = useSelector(({ auth }) => auth.uid);
  const note = useSelector(({ notes }) => notes.curentNote);
  const { id } = useParams();
  const { push } = useHistory();

  const collectionConfig = {
    collection: db.collection('users').doc(uId).collection('notes'),
    reduxActions: {
      fetchDataSuccess: fetchNotesSuccess,
      fetchStart: fetchNotestStart,
      fetchDataFail: fetchNotesFail,
      fetchCurrentItemSuccess: addNote,
    },
  };

  const { handleUpdateItem, handleDeleteItem, handleGetCurrentItem } = useCollection(
    collectionConfig,
  );

  useEffect(() => {
    handleGetCurrentItem(id);
    // react-hooks/exhaustive-deps
    // eslint-disable-next-line
  }, []);

  const handleDelete = async () => {
    await handleDeleteItem(id);
    await push(routes.notes);
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: note ? note.title : '',
      content: note ? note.content : '',
    },
    validate,
    onSubmit: async ({ title, content }) => {
      const updateData = {
        ...note,
        title,
        content,
      };

      await handleUpdateItem(id, updateData);
      await push(routes.notes);
    },
  });

  return (
    <Wrapper withVariants>
      <InnerWrapper>
        {note ? (
          <>
            <StyledForm autoComplete="off" onSubmit={handleSubmit}>
              <div>
                <Input
                  name="title"
                  label="tytuł"
                  onChange={handleChange}
                  value={values.title}
                  isError={errors.title && touched.title}
                  errorMessage={errors.title}
                  defaultFocus
                />
                <Input
                  name="content"
                  label="treść"
                  onChange={handleChange}
                  value={values.content}
                  isError={errors.content && touched.content}
                  errorMessage={errors.content}
                  tag="textarea"
                  defaultFocus
                />
              </div>
              <StyledButton type="submit" secondary>
                Zaktualizuj notatkę
              </StyledButton>
              <StyledButton type="button" onClick={handleDelete} secondary>
                Usuń
              </StyledButton>
            </StyledForm>
          </>
        ) : (
          <Spinner />
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default NotePage;
