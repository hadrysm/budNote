import React from 'react';
import PropTypes from 'prop-types';

import { TableList, Item } from './TableExpenditureItem.style';

const TableExpenditureItem = ({ id, name, category, price, typePayment, deadline }) => {
  return (
    <TableList id={id}>
      <Item>{name}</Item>
      <Item>{category}</Item>
      <Item>{price} zł</Item>
      <Item>{typePayment}</Item>
      <Item>{deadline}</Item>
      <Item>Akcja</Item>
    </TableList>
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
