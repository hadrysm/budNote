import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button.style';

import { Wrapper, StyledForm } from './NewNoteBar.style';

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

const NewNoteBar = ({ handleAddNote }) => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: (value) => {
      handleAddNote(value);
    },
  });

  return (
    <Wrapper>
      <Headline>Twoja notatka</Headline>
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
    </Wrapper>
  );
};

NewNoteBar.propTypes = {
  handleAddNote: PropTypes.func.isRequired,
};

export default NewNoteBar;
