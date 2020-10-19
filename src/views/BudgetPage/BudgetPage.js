import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Box from 'components/atoms/Box/Box';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Headline from 'components/atoms/Headline/Headline.style';
import Section from 'components/atoms/Section/Section.style';
import PaymentTable from 'components/Organisms/PaymentTable/PaymentTable';
import ExpenditureForm from 'components/Organisms/ExpenditureForm/ExpenditureForm';
import Modal from 'components/molecules/Modal/Modal';
import CollectionProvider from 'context/CollectionContext';

import plusIcon from 'assets/icons/plus.svg';

import { fetchBudgetStart, fetchBudgetFail, fetchBudgetSuccess } from 'store/budget/actions';
import { db } from 'firebase/base';

import { Header, StyledButtonIcon } from './BudgetPage.style';

const BudgesPages = () => {
  const [itemId, setItemId] = useState(null);
  const [isExpenditureFormOpen, setIsExpenditureFormOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const budgetItems = useSelector(({ budget }) => budget.budget);
  const uId = useSelector((state) => state.auth.uid);

  const collectionConfig = {
    collection: db.collection('users').doc(uId).collection('budget'),
    reduxActions: {
      fetchDataSuccess: fetchBudgetSuccess,
      fetchStart: fetchBudgetStart,
      fetchDataFail: fetchBudgetFail,
    },
  };

  const handleOpenUpdateBudgetModal = (id) => {
    setItemId(id);
    setIsUpdateModalOpen(true);
  };

  const handleOpenRemoveBudgetModal = (id) => {
    setItemId(id);
    setIsRemoveModalOpen(true);
  };

  useEffect(() => {
    setIsExpenditureFormOpen(false);
    setIsUpdateModalOpen(false);
    setIsRemoveModalOpen(false);
  }, [budgetItems]);

  return (
    <CollectionProvider collectionConfig={collectionConfig}>
      <Wrapper withVariants>
        <PageTitle screenRenderOnly>notatki</PageTitle>
        <Header>
          <div>
            <Headline as="h3">Lista wydatków</Headline>
            <Paragraph>Październik 2020</Paragraph>
          </div>
        </Header>

        <Section>
          <PaymentTable
            setIsExpenditureFormOpen={setIsExpenditureFormOpen}
            handleOpenUpdateBudgetModal={handleOpenUpdateBudgetModal}
            handleOpenRemoveBudgetModal={handleOpenRemoveBudgetModal}
          />
        </Section>
      </Wrapper>

      {/* modals  */}

      <AnimatePresence>
        {isExpenditureFormOpen && (
          <Modal title="nowy wydatek" closeModalFn={() => setIsExpenditureFormOpen(false)}>
            <ExpenditureForm />
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isUpdateModalOpen && (
          <Modal title="aktualizacja" secondary closeModalFn={() => setIsUpdateModalOpen(false)}>
            <ExpenditureForm isUpdate itemId={itemId} />
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRemoveModalOpen && (
          <Modal
            title="Czy napewno chcesz usunąć?"
            secondary
            small
            closeModalFn={() => setIsRemoveModalOpen(false)}
          >
            <Box itemId={itemId} />
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
