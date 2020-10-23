import React from 'react';
import { useSelector } from 'react-redux';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Headline from 'components/atoms/Headline/Headline.style';
import MyResponsivePie from 'components/Organisms/MyResponsivePie/MyResponsivePie';
import { Header, InnerWrapper, Content } from './ChartPage.style';

const ChartPages = () => {
  const budgetItems = useSelector(({ budget }) => budget.budget);

  const parseData = () => {
    const pieData = budgetItems.reduce((acc, { category, amount }) => {
      const existItem = acc.find(({ id }) => id === category);
      if (existItem) {
        existItem.value += amount;
      } else {
        acc.push({
          id: category,
          value: amount,
          color: 'hsl(301, 70%, 50%)',
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
          <Headline>wykres wydatków</Headline>
        </Header>
        <Section>
          <Content>
            <MyResponsivePie data={parseData()} colorBy={(item) => item.color} />
          </Content>
        </Section>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ChartPages;
