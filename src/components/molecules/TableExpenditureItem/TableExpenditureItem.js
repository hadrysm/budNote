import React from 'react';
import PropTypes from 'prop-types';

import { TableList, StyledListItem, DataItem } from './TableExpenditureItem.style';

const TableExpenditureItem = ({ id, name, category, price, typePayment, deadline }) => {
  return (
    <StyledListItem id={id}>
      <TableList>
        <DataItem>{name}</DataItem>
        <DataItem>{category}</DataItem>
        <DataItem>{price} zł</DataItem>
        <DataItem>{typePayment}</DataItem>
        <DataItem>{deadline}</DataItem>
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
  price: PropTypes.string.isRequired,
  typePayment: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};

export default TableExpenditureItem;
