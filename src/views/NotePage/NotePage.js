import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Input from 'components/atoms/Input/Input';

import { db } from 'firebase/base';
import { useSelector } from 'react-redux';

import { useNotes } from 'hooks/useNotes';
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
  const { handleUpdateNote, handleDeleteNote } = useNotes();

  useEffect(() => {
    const fetchNote = async () => {
      const res = await db.collection('users').doc(uId).collection('notes').doc(id).get();
      setNote(res.data());
    };

    fetchNote();
  }, [id]);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: note ? note.title : '',
      content: note ? note.content : '',
    },
    validate,
    onSubmit: ({ title, content }) => {
      const updateData = {
        ...note,
        title,
        content,
      };

      handleUpdateNote(id, updateData);
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
              <StyledButton type="button" onClick={() => handleDeleteNote(id)} secondary>
                Usuń
              </StyledButton>
            </StyledForm>
          </>
        ) : (
          <p>loading...</p>
        )}
      </InnerWrapper>
    </Wrapper>
  );
};

export default NotePage;
