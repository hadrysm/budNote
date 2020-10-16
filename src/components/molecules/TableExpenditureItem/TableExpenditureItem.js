import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';
import editIcon from 'assets/icons/edit.svg';
import removeIcon from 'assets/icons/remove.svg';
import waitIcon from 'assets/icons/wait.svg';
import doneIcon from 'assets/icons/done.svg';
import { CollectionContext } from 'context/CollectionContext';

import { getFormatDate } from 'helpers';
import {
  TableList,
  StyledListItem,
  DataItem,
  StyledButtonIcon,
} from './TableExpenditureItem.style';

const TableExpenditureItem = ({ id, title, category, amount, createAt, isCompleted }) => {
  const { handleDeleteBudget, handleUpdateBudget } = useContext(CollectionContext);

  const handleChangeStatus = () => {
    if (isCompleted) return;
    const updateData = {
      id,
      title,
      category,
      amount,
      createAt,
      isCompleted: true,
    };

    handleUpdateBudget(id, updateData);
  };

  return (
    <StyledListItem id={id}>
      <TableList>
        <DataItem>{title}</DataItem>
        <DataItem>{category}</DataItem>
        <DataItem>{amount} zł</DataItem>
        <DataItem>{getFormatDate(createAt)}</DataItem>
        <DataItem>
          <StyledButtonIcon icon={editIcon} isSmall />
          <StyledButtonIcon
            onClick={() => handleDeleteBudget(id)}
            icon={removeIcon}
            isSmall
            remove
          />
        </DataItem>
        <DataItem>
          <ButtonIcon
            onClick={handleChangeStatus}
            icon={isCompleted ? doneIcon : waitIcon}
            isSmall
            status
            isCompleted={isCompleted}
          />
        </DataItem>
      </TableList>
    </StyledListItem>
  );
};

TableExpenditureItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createAt: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool,
};

TableExpenditureItem.defaultProps = {
  isCompleted: false,
};

export default TableExpenditureItem;
