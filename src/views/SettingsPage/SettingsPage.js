import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper';
import Box from 'components/atoms/Box';
import PageTitle from 'components/atoms/PageTitle';
import Section from 'components/atoms/Section';
import Headline from 'components/atoms/Headline';
import SwitchButton from 'components/atoms/SwitchButton';
import CategoryBox from 'components/molecules/CategoryBox';
import CollectionProvider from 'context/CollectionContext';
import Modal from 'components/molecules/Modal';
import NewCategoryForm from 'components/molecules/NewCategoryForm';

import { useDarkMode } from 'hooks/useDarkMode';
import { themeColorType } from 'store/settings/types';

import plusIcon from 'assets/icons/plus.svg';

import {
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchCategoryFail,
} from 'store/settings/actions';

import { db } from 'firebase/base';
import { InnerWrapper, StyledButtonIcon } from './SettingsPage.style';

const SettingsPage = () => {
  const [itemId, setItemId] = useState(null);
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isRemoveModalOpen, setisRemoveModalOpen] = useState(false);

  const [theme, toggleTheme] = useDarkMode();

  const uId = useSelector((state) => state.auth.uid);
  const categoryItems = useSelector(({ settings }) => settings.category);

  const collectionCategoryConfig = {
    collection: db.collection('users').doc(uId).collection('category'),
    reduxActions: {
      fetchDataSuccess: fetchCategorySuccess,
      fetchStart: fetchCategoryStart,
      fetchDataFail: fetchCategoryFail,
    },
  };

  const handleOpenUpdateBudgetModal = (id) => {
    setItemId(id);
    setIsUpdateModalOpen(true);
  };

  const handleOpenRemoveBudgetModal = (id) => {
    setItemId(id);
    setisRemoveModalOpen(true);
  };

  useEffect(() => {
    if (isNewCategoryModalOpen || isUpdateModalOpen || isRemoveModalOpen)
      document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
  }, [isNewCategoryModalOpen, isUpdateModalOpen, isRemoveModalOpen]);

  useEffect(() => {
    setIsNewCategoryModalOpen(false);
    setIsUpdateModalOpen(false);
    setisRemoveModalOpen(false);
  }, [categoryItems]);

  return (
    <CollectionProvider collectionConfig={collectionCategoryConfig}>
      <Wrapper withVariants>
        <PageTitle screenRenderOnly>ustawienia</PageTitle>
        <Section>
          <Headline>{theme} mode</Headline>
          <InnerWrapper>
            <SwitchButton toLeft handleClick={toggleTheme} isOn={theme === themeColorType.LIGHT} />
          </InnerWrapper>
        </Section>

        <Section>
          <Headline>twoje kategorie</Headline>
          <InnerWrapper>
            <CategoryBox
              handleOpenRemoveBudgetModal={handleOpenRemoveBudgetModal}
              handleOpenUpdateBudgetModal={handleOpenUpdateBudgetModal}
            />
          </InnerWrapper>
        </Section>
      </Wrapper>

      <AnimatePresence>
        {isNewCategoryModalOpen && (
          <Modal
            title="Dodaj nową kategorię"
            secondary
            closeModalFn={() => setIsNewCategoryModalOpen(false)}
          >
            <NewCategoryForm />
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isUpdateModalOpen && (
          <Modal title="aktualizacja" secondary closeModalFn={() => setIsUpdateModalOpen(false)}>
            <NewCategoryForm isUpdate itemId={itemId} />
          </Modal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRemoveModalOpen && (
          <Modal
            title="Czy napewno chcesz usunąć tę kategorię?"
            secondary
            closeModalFn={() => setisRemoveModalOpen(false)}
          >
            <Box itemId={itemId} />
          </Modal>
        )}
      </AnimatePresence>

      <StyledButtonIcon
        icon={plusIcon}
        onClick={() => setIsNewCategoryModalOpen((prevState) => !prevState)}
      />
    </CollectionProvider>
  );
};

export default SettingsPage;
