import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button.style';

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

const NoteForm = ({ handleAddNote }) => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: (value) => {
      handleAddNote(value);
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

NoteForm.propTypes = {
  handleAddNote: PropTypes.func.isRequired,
};

export default NoteForm;
