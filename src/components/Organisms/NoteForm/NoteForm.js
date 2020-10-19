import React, { useContext } from 'react';
import { useFormik } from 'formik';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button.style';

import { CollectionContext } from 'context/CollectionContext';

import { StyledForm } from './NoteForm.style';

const initialValues = { title: '', content: '' };

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

const NoteForm = () => {
  const { handleAddItem } = useContext(CollectionContext);

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: (value) => {
      const noteData = {
        ...value,
        createAt: Date.now(),
      };

      handleAddItem(noteData);
    },
  });
  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <Input
          name="title"
          label="tytuł"
          onChange={handleChange}
          value={values.title}
          isError={errors.title && touched.title}
          errorMessage={errors.title}
        />
        <Input
          name="content"
          label="treść"
          onChange={handleChange}
          value={values.content}
          isError={errors.content && touched.content}
          errorMessage={errors.content}
          tag="textarea"
        />
      </div>
      <Button type="submit" secondary>
        Dodaj notatkę
      </Button>
    </StyledForm>
  );
};

export default NoteForm;
