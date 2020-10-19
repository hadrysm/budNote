import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';
import penIcon from 'assets/icons/pen.svg';
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

const TableExpenditureItem = ({
  id,
  title,
  category,
  amount,
  createAt,
  isCompleted,
  handleOpenUpdateBudgetModal,
  handleOpenRemoveBudgetModal,
}) => {
  // const { handleUpdateBudget } = useContext(CollectionContext);
  const { handleUpdateItem } = useContext(CollectionContext);

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

    // handleUpdateBudget(id, updateData);1
    handleUpdateItem(id, updateData);
  };

  return (
    <StyledListItem id={id}>
      <TableList>
        <DataItem>{title}</DataItem>
        <DataItem>{category}</DataItem>
        <DataItem>{amount} zł</DataItem>
        <DataItem>{getFormatDate(createAt)}</DataItem>
        <DataItem>
          <StyledButtonIcon
            onClick={() => {
              handleOpenUpdateBudgetModal(id);
            }}
            icon={penIcon}
            isSmall
          />
          <StyledButtonIcon
            onClick={() => handleOpenRemoveBudgetModal(id)}
            icon={removeIcon}
            isSmall
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
  handleOpenUpdateBudgetModal: PropTypes.func.isRequired,
  handleOpenRemoveBudgetModal: PropTypes.func.isRequired,
};

TableExpenditureItem.defaultProps = {
  isCompleted: false,
};

export default TableExpenditureItem;
