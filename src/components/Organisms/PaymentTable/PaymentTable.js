import React from 'react';
import { useSelector } from 'react-redux';

import List from 'components/atoms/List/List.style';

import TableExpenditureItem from 'components/molecules/TableExpenditureItem/TableExpenditureItem';
import { Table, CardRow, TableList, Item } from './PaymentTable.style';

const PaymentTable = () => {
  const budgetItemsData = useSelector(({ budget }) => budget.budget);

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
              name={title}
              category={category}
              price={amount}
              createAt={createAt}
              isCompleted={isCompleted}
            />
          ))}
        </List>
      </CardRow>
    </Table>
  );
};

export default PaymentTable;
