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

import plusIcon from 'assets/icons/plus.svg';

import { useBudget } from 'hooks/useBudget';

import { Header, StyledButtonIcon } from './BudgetPage.style';

const BudgesPages = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { handleAddNewExpense } = useBudget();
  return (
    <>
      <Wrapper withVariants>
        <PageTitle screenRenderOnly>notatki</PageTitle>
        <Header>
          <div>
            <Headline as="h3">Lista wydatków</Headline>
            <Paragraph>Październik 2020</Paragraph>
          </div>
        </Header>

        <Section>
          <PaymentTable handleOpenModal={setModalOpen} />
        </Section>
      </Wrapper>
      <AnimatePresence>
        {isModalOpen && (
          <Modal title="nowy wydatek">
            <ExpenditureForm handleAddNewExpense={handleAddNewExpense} />
          </Modal>
        )}
      </AnimatePresence>
      <StyledButtonIcon icon={plusIcon} onClick={() => setModalOpen((prevState) => !prevState)} />
    </>
  );
};

export default BudgesPages;
