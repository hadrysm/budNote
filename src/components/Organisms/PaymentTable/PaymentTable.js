import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import List from 'components/atoms/List/List.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Button from 'components/atoms/Button/Button.style';
import TableExpenditureItem from 'components/molecules/TableExpenditureItem/TableExpenditureItem';
import { Table, CardRow, TableList, Item, NoDataWrapper } from './PaymentTable.style';

const PaymentTable = ({ handleOpenModal }) => {
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
              <Button onClick={() => handleOpenModal(true)}>Dodaj</Button>
            </NoDataWrapper>
          )}

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

PaymentTable.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
};

export default PaymentTable;
