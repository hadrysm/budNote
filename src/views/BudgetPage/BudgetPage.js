import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Section from 'components/atoms/Section/Section.style';
import PaymentTable from 'components/Organisms/PaymentTable/PaymentTable';
import ExpenditureForm from 'components/Organisms/ExpenditureForm/ExpenditureForm';
import Modal from 'components/molecules/Modal/Modal';
import CollectionProvider from 'context/CollectionContext';

import plusIcon from 'assets/icons/plus.svg';

import { Header, StyledButtonIcon } from './BudgetPage.style';

const BudgesPages = () => {
  const [isExpenditureFormOpen, setIsExpenditureFormOpen] = useState(false);
  return (
    <CollectionProvider>
      <Wrapper withVariants>
        <PageTitle screenRenderOnly>notatki</PageTitle>
        <Header>
          <div>
            <Headline as="h3">Lista wydatków</Headline>
            <Paragraph>Październik 2020</Paragraph>
          </div>
        </Header>

        <Section>
          <PaymentTable setIsExpenditureFormOpen={setIsExpenditureFormOpen} />
        </Section>
      </Wrapper>
      <AnimatePresence>
        {isExpenditureFormOpen && (
          <Modal title="nowy wydatek">
            <ExpenditureForm setIsExpenditureFormOpen={setIsExpenditureFormOpen} />
          </Modal>
        )}
      </AnimatePresence>
      <StyledButtonIcon
        icon={plusIcon}
        onClick={() => setIsExpenditureFormOpen((prevState) => !prevState)}
      />
    </CollectionProvider>
  );
};

export default BudgesPages;
