import React from 'react';
import { useFormik } from 'formik';

import Input from 'components/atoms/Input/Input';
import { StyledForm, StyledButton } from './ExpenditureForm.style';

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

const ExpenditureBar = () => {
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <Input
        name="title"
        label="nazwa"
        onChange={handleChange}
        value={values.title}
        isError={errors.title && touched.title}
        errorMessage={errors.title}
      />
      <Input
        name="price"
        label="kwota"
        onChange={handleChange}
        value={values.price}
        isError={errors.price && touched.price}
        errorMessage={errors.price}
      />
      <Input
        name="category"
        label="select - kategoria"
        onChange={handleChange}
        value={values.category}
        isError={errors.category && touched.category}
        errorMessage={errors.category}
      />

      <StyledButton type="submit" secondary>
        Dodaj
      </StyledButton>
    </StyledForm>
  );
};

export default ExpenditureBar;
