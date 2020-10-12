import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Button from 'components/atoms/Button/Button.style';
import Section from 'components/atoms/Section/Section.style';

import PaymentTable from 'components/Organisms/PaymentTable/PaymentTable';

import { Header } from './BudgetPage.style';

const BudgesPages = () => {
  return (
    <Wrapper withVariants>
      <Header>
        <div>
          <Paragraph>Październik 2020</Paragraph>
          <Headline as="h3">Lista wydatków</Headline>
        </div>
        <div>
          <Button>Dodaj</Button>
        </div>
      </Header>

      <Section>
        <PaymentTable />
      </Section>
    </Wrapper>
  );
};

export default BudgesPages;
