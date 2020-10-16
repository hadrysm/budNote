import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import List from 'components/atoms/List/List.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Button from 'components/atoms/Button/Button.style';
import TableExpenditureItem from 'components/molecules/TableExpenditureItem/TableExpenditureItem';
import { Table, CardRow, TableList, Item, NoDataWrapper } from './PaymentTable.style';

const PaymentTable = ({ setIsExpenditureFormOpen }) => {
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
          {!budgetItemsData.length && (
            <NoDataWrapper>
              <Paragraph>Dodaj pierwszy koszt</Paragraph>
              <Button onClick={() => setIsExpenditureFormOpen(true)}>Dodaj</Button>
            </NoDataWrapper>
          )}

          {budgetItemsData.map(({ id, title, category, amount, createAt, isCompleted }) => (
            <TableExpenditureItem
              key={id}
              id={id}
              title={title}
              category={category}
              amount={amount}
              createAt={createAt}
              isCompleted={isCompleted}
              setIsExpenditureFormOpen={setIsExpenditureFormOpen}
            />
          ))}
        </List>
      </CardRow>
    </Table>
  );
};

PaymentTable.propTypes = {
  setIsExpenditureFormOpen: PropTypes.func.isRequired,
};

export default PaymentTable;
