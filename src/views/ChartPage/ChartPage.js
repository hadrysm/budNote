import React from 'react';
import { useSelector } from 'react-redux';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import Button from 'components/atoms/Button/Button.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Headline from 'components/atoms/Headline/Headline.style';
import MyResponsivePie from 'components/Organisms/MyResponsivePie/MyResponsivePie';
import Balance from 'components/molecules/Balance/Balance';
import { getColor } from 'helpers';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import routes from 'routes';
import { Header, InnerWrapper, Content, NoDataWrapper } from './ChartPage.style';

const ChartPages = () => {
  const budgetItems = useSelector(({ budget }) => budget.budget);

  const parseData = () => {
    const pieData = budgetItems.reduce((acc, { category, amount }, index) => {
      const existItem = acc.find(({ id }) => id === category);
      if (existItem) {
        existItem.value += amount;
      } else {
        acc.push({
          id: category,
          value: amount,
          color: getColor(index),
        });
      }
      return acc;
    }, []);

    return pieData;
  };

  return (
    <Wrapper withVariants maxWidth>
      <InnerWrapper>
        <PageTitle screenRenderOnly>wykres</PageTitle>
        <Header>
          <Headline>wykres wydatków wg. kategorii</Headline>
          <Balance budgetItems={budgetItems} />
        </Header>
        <Section>
          {!budgetItems.length ? (
            <NoDataWrapper>
              <Paragraph>Musisz posiadać najpierw jakieś wydatki</Paragraph>
              <Paragraph>Dodaj je szybko!</Paragraph>
              <LinkItem to={routes.budget}>
                <Button>Przejdź!</Button>
              </LinkItem>
            </NoDataWrapper>
          ) : (
            <Content>
              <MyResponsivePie
                data={parseData()}
                colorBy={(d) => d.color}
                sliceLabel={(d) => `${d.value} zł`}
              />
            </Content>
          )}
        </Section>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ChartPages;
