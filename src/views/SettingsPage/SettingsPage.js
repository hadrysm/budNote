import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Headline from 'components/atoms/Headline/Headline.style';
import SwitchButton from 'components/atoms/SwitchButton/SwitchButton';

import { useDarkMode } from 'hooks/useDarkMode';
import { themeColorType } from 'store/settings/types';
import { InnerWrapper, Box, CategotyItem, CategoryList } from './SettingsPage.style';

const SettingsPage = () => {
  const [theme, toggleTheme] = useDarkMode();

  return (
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
          <Box>
            <CategoryList>
              <CategotyItem>samochód</CategotyItem>
              <CategotyItem>mieszkanie</CategotyItem>
              <CategotyItem>studia</CategotyItem>
              <CategotyItem>udemy</CategotyItem>
              <CategotyItem>jedzenie</CategotyItem>
              <CategotyItem>rozrywka</CategotyItem>
            </CategoryList>
          </Box>
        </InnerWrapper>
      </Section>
    </Wrapper>
  );
};

export default SettingsPage;
