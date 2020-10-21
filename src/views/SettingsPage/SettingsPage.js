import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Box from 'components/atoms/Box/Box';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Headline from 'components/atoms/Headline/Headline.style';
import SwitchButton from 'components/atoms/SwitchButton/SwitchButton';
import CategoryBox from 'components/molecules/CategoryBox/CategoryBox';
import CollectionProvider from 'context/CollectionContext';
import Modal from 'components/molecules/Modal/Modal';

import { useDarkMode } from 'hooks/useDarkMode';
import { themeColorType } from 'store/settings/types';

import {
  fetchCategoryStart,
  fetchCategorySuccess,
  fetchCategoryFail,
} from 'store/settings/actions';

import { db } from 'firebase/base';
import { InnerWrapper } from './SettingsPage.style';

const SettingsPage = () => {
  const [itemId, setItemId] = useState(null);
  const [isRemoveModalOpen, setisRemoveModalOpen] = useState(false);

  const [theme, toggleTheme] = useDarkMode();

  const uId = useSelector((state) => state.auth.uid);

  const collectionCategoryConfig = {
    collection: db.collection('users').doc(uId).collection('category'),
    reduxActions: {
      fetchDataSuccess: fetchCategorySuccess,
      fetchStart: fetchCategoryStart,
      fetchDataFail: fetchCategoryFail,
    },
  };

  const handleOpenRemoveBudgetModal = (id) => {
    setItemId(id);
    setisRemoveModalOpen(true);
  };

  return (
    <CollectionProvider collectionConfig={collectionCategoryConfig}>
      <Wrapper withVariants>
        <PageTitle screenRenderOnly>ustawienia</PageTitle>
        <Section>
          <Headline>{theme === themeColorType.LIGHT ? 'light' : 'dark'} mode</Headline>
          <InnerWrapper>
            <SwitchButton toLeft handleClick={toggleTheme} isOn={theme === themeColorType.LIGHT} />
          </InnerWrapper>
        </Section>

        <Section>
          <Headline>twoje kategorie</Headline>
          <InnerWrapper>
            <CategoryBox handleOpenRemoveBudgetModal={handleOpenRemoveBudgetModal} />
          </InnerWrapper>
        </Section>
      </Wrapper>

      <AnimatePresence>
        {isRemoveModalOpen && (
          <Modal
            title="Czy napewno chcesz usunąć tę kategorię?"
            secondary
            small
            closeModalFn={() => setisRemoveModalOpen(false)}
          >
            <Box itemId={itemId} />
          </Modal>
        )}
      </AnimatePresence>
    </CollectionProvider>
  );
};

export default SettingsPage;
