import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import Input from 'components/atoms/Input/Input';

import { CollectionContext } from 'context/CollectionContext';
import { StyledForm, StyledButton } from './NewCategoryForm.style';

const NewCategoryForm = ({ isUpdate, itemId }) => {
  const { handleAddItem, handleUpdateItem } = useContext(CollectionContext);

  const categoryItems = useSelector(({ settings }) => settings.category);

  const currentItem = categoryItems.find(({ id }) => id === itemId);

  const { values, errors: err, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      title: isUpdate ? currentItem.displayValue : '',
    },
    validate: ({ title }) => {
      const errors = {};
      if (!title) {
        errors.title = 'Pole jest wymagane';
      }
      return errors;
    },
    onSubmit: (value) => {
      if (isUpdate) {
        const updateData = {
          ...currentItem,
          displayValue: value.title,
          value: value.title,
        };

        handleUpdateItem(itemId, updateData);
      } else {
        const expData = {
          displayValue: value.title,
          value: value.title,
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
          label="nazwa kategorii"
          onChange={handleChange}
          value={values.title}
          isError={err.title && touched.title}
          errorMessage={err.title}
          defaultFocus={isUpdate}
        />
      </div>
      <StyledButton type="submit" secondary>
        {isUpdate ? 'zaktualizuj' : 'dodaj'}
      </StyledButton>
    </StyledForm>
  );
};

NewCategoryForm.propTypes = {
  isUpdate: PropTypes.bool,
  itemId: PropTypes.string,
};

NewCategoryForm.defaultProps = {
  isUpdate: false,
  itemId: '',
};

export default NewCategoryForm;
