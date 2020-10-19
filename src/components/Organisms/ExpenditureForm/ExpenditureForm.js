import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';
import { CollectionContext } from 'context/CollectionContext';
import { StyledForm, StyledButton } from './ExpenditureForm.style';

const ExpenditureForm = ({ isUpdate, itemId }) => {
  const { handleAddItem, handleUpdateItem } = useContext(CollectionContext);

  const budgetItems = useSelector(({ budget }) => budget.budget);
  const currentItem = budgetItems.find(({ id }) => id === itemId);

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
      title: isUpdate ? currentItem.title : '',
      amount: isUpdate ? currentItem.amount : '',
      category: isUpdate ? currentItem.category : '',
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
      if (isUpdate) {
        const updateData = {
          ...currentItem,
          ...value,
        };

        handleUpdateItem(itemId, updateData);
      } else {
        const expData = {
          ...value,
          isCompleted: false,
          createAt: Date.now(),
        };
        handleAddItem(expData);
      }
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
          defaultFocus={isUpdate}
        />

        <Input
          type="number"
          name="amount"
          label="kwota"
          onChange={handleChange}
          value={values.amount}
          isError={err.amount && touched.amount}
          errorMessage={err.amount}
          defaultFocus={isUpdate}
        />

        <Select
          name="category"
          label="twoje kategorie"
          onChange={handleChange}
          value={values.category}
          isError={err.category && touched.category}
          errorMessage={err.category}
          options={categoryOptions}
        />
      </div>
      <StyledButton type="submit" secondary>
        {isUpdate ? 'zaktualizuj' : 'dodaj'}
      </StyledButton>
    </StyledForm>
  );
};

ExpenditureForm.propTypes = {
  isUpdate: PropTypes.bool,
  itemId: PropTypes.string,
};

ExpenditureForm.defaultProps = {
  isUpdate: false,
  itemId: '',
};

export default ExpenditureForm;
