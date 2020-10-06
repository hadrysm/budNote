import React from 'react';
import { useFormik } from 'formik';

import Headline from 'components/atoms/Headline/Headline.style';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button.style';
import { Wrapper, StyledForm } from './NewNoteBar.style';

const initialValues = { title: '', content: '' };

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Pole jest wymagane';
  }

  if (!values.content) {
    errors.content = 'Pole jest wymagane';
  }
  return errors;
};

const NewNoteBar = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: ({ title, content }) => {
      console.log(title, content);
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

export default NewNoteBar;