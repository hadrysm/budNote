import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';
import editIcon from 'assets/icons/edit.svg';
import removeIcon from 'assets/icons/remove.svg';
import waitIcon from 'assets/icons/wait.svg';
import doneIcon from 'assets/icons/done.svg';

import { getFormatDate } from 'helpers';
import {
  TableList,
  StyledListItem,
  DataItem,
  StyledButtonIcon,
} from './TableExpenditureItem.style';

const TableExpenditureItem = ({ id, name, category, price, createAt, isCompleted }) => {
  return (
    <StyledListItem id={id}>
      <TableList>
        <DataItem>{name}</DataItem>
        <DataItem>{category}</DataItem>
        <DataItem>{price} zł</DataItem>
        <DataItem>{getFormatDate(createAt)}</DataItem>
        <DataItem>
          <StyledButtonIcon icon={editIcon} isSmall />
          <StyledButtonIcon icon={removeIcon} isSmall remove />
        </DataItem>
        <DataItem>
          <ButtonIcon
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
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  createAt: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool,
};

TableExpenditureItem.defaultProps = {
  isCompleted: false,
};

export default TableExpenditureItem;
