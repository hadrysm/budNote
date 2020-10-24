import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Input from 'components/atoms/Input/Input';
import Spinner from 'components/atoms/Spinner/Spinner';

import { db } from 'firebase/base';
import routes from 'routes';

import { fetchNotestStart, fetchNotesSuccess, fetchNotesFail } from 'store/notes/actions';
import { useCollection } from 'hooks/useCollection';
import { InnerWrapper, StyledForm, StyledButton } from './NotePage.style';

const validate = ({ title, content }) => {
  const errors = {};
  if (!title) {
    errors.title = 'Pole jest wymagane';
  }

  if (!content) {
    errors.content = 'Pole jest wymagane';
  }
  return errors;
};

const NotePage = () => {
  const [note, setNote] = useState(null);
  const uId = useSelector(({ auth }) => auth.uid);
  const { id } = useParams();
  const { push } = useHistory();

  const collectionConfig = {
    collection: db.collection('users').doc(uId).collection('notes'),
    reduxActions: {
      fetchDataSuccess: fetchNotesSuccess,
      fetchStart: fetchNotestStart,
      fetchDataFail: fetchNotesFail,
    },
  };

  const { handleUpdateItem, handleDeleteItem, handleGetCurrentItem } = useCollection(
    collectionConfig,
  );

  useEffect(() => {
    const fetchNote = async () => {
      const currentNote = await handleGetCurrentItem(id);
      setNote(currentNote);
    };

    fetchNote();
  }, [id, handleGetCurrentItem]);

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
