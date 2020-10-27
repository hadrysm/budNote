import React from 'react';
import { useSelector } from 'react-redux';

import Wrapper from 'components/atoms/Wrapper';
import Button from 'components/atoms/Button';
import PageTitle from 'components/atoms/PageTitle';
import Section from 'components/atoms/Section';
import Headline from 'components/atoms/Headline';
import MyResponsivePie from 'components/organisms/MyResponsivePie';
import Balance from 'components/molecules/Balance';
import Paragraph from 'components/atoms/Paragraph';
import LinkItem from 'components/atoms/LinkItem';

import routes from 'routes';
import { getPieData } from 'helpers';

import { Header, InnerWrapper, Content, NoDataWrapper } from './ChartPage.style';

const ChartPages = () => {
  const budgetItems = useSelector(({ budget }) => budget.budget);
  const data = getPieData(budgetItems);

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
                data={data}
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
