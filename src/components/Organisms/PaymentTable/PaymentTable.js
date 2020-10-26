import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import List from 'components/atoms/List';

import TableExpenditureItem from 'components/molecules/TableExpenditureItem';
import { Table, CardRow, TableList, Item } from './PaymentTable.style';

const PaymentTable = ({ handleOpenRemoveBudgetModal, handleOpenUpdateBudgetModal }) => {
  const budgetItemsData = useSelector(({ budget }) => budget.budget);

  // add dynamic generation data to table list
  return (
    <Table>
      <CardRow isHeading>
        <TableList>
          <Item>Nazwa</Item>
          <Item>Kategoria</Item>
          <Item>Kwota</Item>
          <Item>Data</Item>
          <Item>Akcja</Item>
          <Item>Status</Item>
        </TableList>
      </CardRow>

      <CardRow>
        <List>
          {budgetItemsData.map(({ id, title, category, amount, createAt, isCompleted }) => (
            <TableExpenditureItem
              key={id}
              id={id}
              title={title}
              category={category}
              amount={amount}
              createAt={createAt}
              isCompleted={isCompleted}
              handleOpenUpdateBudgetModal={handleOpenUpdateBudgetModal}
              handleOpenRemoveBudgetModal={handleOpenRemoveBudgetModal}
            />
          ))}
        </List>
      </CardRow>
    </Table>
  );
};

PaymentTable.propTypes = {
  handleOpenUpdateBudgetModal: PropTypes.func.isRequired,
  handleOpenRemoveBudgetModal: PropTypes.func.isRequired,
};

export default PaymentTable;
