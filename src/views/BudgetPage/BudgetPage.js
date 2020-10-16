import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import RemoveBox from 'components/atoms/RemoveBox/RemoveBox';
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
  const [itemId, setItemId] = useState(null);
  const [isExpenditureFormOpen, setIsExpenditureFormOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const budgetItems = useSelector(({ budget }) => budget.budget);

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
          <Modal title="nowy wydatek">
            <ExpenditureForm setIsExpenditureFormOpen={setIsExpenditureFormOpen} />
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isUpdateModalOpen && (
          <Modal title="aktualizacja" secondary closeModalFn={() => setIsUpdateModalOpen(false)}>
            <ExpenditureForm
              isUpdate
              setIsExpenditureFormOpen={setIsUpdateModalOpen}
              itemId={itemId}
            />
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
            <RemoveBox itemId={itemId} />
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
