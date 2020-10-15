import React from 'react';
import PropTypes from 'prop-types';

import { getFormatDate } from 'helpers';
import { TableList, StyledListItem, DataItem } from './TableExpenditureItem.style';

const TableExpenditureItem = ({ id, name, category, price, createAt }) => {
  return (
    <StyledListItem id={id}>
      <TableList>
        <DataItem>{name}</DataItem>
        <DataItem>{category}</DataItem>
        <DataItem>{price} zł</DataItem>

        <DataItem>{getFormatDate(createAt)}</DataItem>
        <DataItem>Akcja</DataItem>
      </TableList>
    </StyledListItem>
  );
};

// for now ..

TableExpenditureItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  createAt: PropTypes.number.isRequired,
};

export default TableExpenditureItem;
