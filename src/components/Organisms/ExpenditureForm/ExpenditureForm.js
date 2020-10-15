import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';
import { StyledForm, StyledButton } from './ExpenditureForm.style';

const ExpenditureForm = ({ handleAddNewExpense }) => {
  const categoryOptions = [
    {
      displayValue: 'wybierz kategorię',
      value: '',
    },
    {
      displayValue: 'mieszkanie',
      value: 'mieszkanie',
    },
    {
      displayValue: 'jedzenie',
      value: 'jedzenie',
    },
    {
      displayValue: 'nauka',
      value: 'nauka',
    },
  ];

  const { values, errors: err, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: '',
      amount: '',
      category: '',
    },
    validate: ({ title, amount, category }) => {
      const errors = {};
      if (!title) {
        errors.title = 'Pole jest wymagane';
      }

      if (!amount) {
        errors.amount = 'Pole jest wymagane';
      }

      if (!category) {
        errors.category = 'Pole jest wymagane';
      }
      return errors;
    },
    onSubmit: (value) => {
      handleAddNewExpense(value);
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
          isError={err.title && touched.title}
          errorMessage={err.title}
        />

        <Input
          type="number"
          name="amount"
          label="kwota"
          onChange={handleChange}
          value={values.amount}
          isError={err.amount && touched.amount}
          errorMessage={err.amount}
        />

        <Select
          name="category"
          label="twoje kategorie"
          onChange={handleChange}
          isError={err.category && touched.category}
          errorMessage={err.category}
          options={categoryOptions}
        />
      </div>
      <StyledButton type="submit" secondary>
        Dodaj notatkę
      </StyledButton>
    </StyledForm>
  );
};

ExpenditureForm.propTypes = {
  handleAddNewExpense: PropTypes.func.isRequired,
};

export default ExpenditureForm;
