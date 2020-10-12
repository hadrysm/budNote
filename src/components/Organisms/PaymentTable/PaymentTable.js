import React from 'react';

import List from 'components/atoms/List/List.style';

import TableExpenditureItem from 'components/molecules/TableExpenditureItem/TableExpenditureItem';
import { Table, CardRow, TableList, Item } from './PaymentTable.style';

const PaymentTable = () => {
  return (
    <Table>
      <CardRow isHeading>
        <TableList>
          <Item>Nazwa</Item>
          <Item>Kategoria</Item>
          <Item>Kwota</Item>
          <Item>Typ</Item>
          <Item>Data</Item>
          <Item>Akcja</Item>
        </TableList>
      </CardRow>

      <CardRow>
        {/* elements ... */}
        <List>
          <TableExpenditureItem
            id="1"
            name="czynsz"
            category="mieszkanie"
            price="500"
            typePayment="auto"
            deadline="23-12-2020"
          />
          <TableExpenditureItem
            id="1"
            name="czynsz"
            category="mieszkanie"
            price="500"
            typePayment="auto"
            deadline="23-12-2020"
          />
          <TableExpenditureItem
            id="1"
            name="czynsz"
            category="mieszkanie"
            price="500"
            typePayment="auto"
            deadline="23-12-2020"
          />
          <TableExpenditureItem
            id="1"
            name="czynsz"
            category="mieszkanie"
            price="500"
            typePayment="auto"
            deadline="23-12-2020"
          />
          <TableExpenditureItem
            id="1"
            name="czynsz"
            category="mieszkanie"
            price="500"
            typePayment="auto"
            deadline="23-12-2020"
          />
          <TableExpenditureItem
            id="1"
            name="czynsz"
            category="mieszkanie"
            price="500"
            typePayment="auto"
            deadline="23-12-2020"
          />
          <TableExpenditureItem
            id="1"
            name="czynsz"
            category="mieszkanie"
            price="500"
            typePayment="auto"
            deadline="23-12-2020"
          />
        </List>
      </CardRow>
    </Table>
  );
};

export default PaymentTable;
