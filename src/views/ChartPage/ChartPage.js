import React from 'react';

import Wrapper from 'components/atoms/Wrapper/Wrapper.style';
import PageTitle from 'components/atoms/PageTitle/PageTitle.style';
import Section from 'components/atoms/Section/Section.style';
import Headline from 'components/atoms/Headline/Headline.style';
import MyResponsivePie from 'components/Organisms/MyResponsivePie/MyResponsivePie';
import { Header, InnerWrapper, Content } from './ChartPage.style';

const ChartPages = () => {
  const data = [
    {
      id: 'mieszkanie',
      value: 310,
      color: 'hsl(163, 70%, 50%)',
    },
    {
      id: 'jedzenie',
      value: 479,
      color: 'hsl(52, 70%, 50%)',
    },
    {
      id: 'samochód',
      value: 463,
      color: 'hsl(146, 70%, 50%)',
    },
    {
      id: 'python',
      value: 304,
      color: 'hsl(161, 30%, 50%)',
    },
    {
      id: 'scala',
      value: 205,
      color: 'hsl(301, 70%, 50%)',
    },
  ];

  return (
    <Wrapper withVariants maxWidth>
      <InnerWrapper>
        <PageTitle screenRenderOnly>wykres</PageTitle>
        <Header>
          <Headline>wykres wydatków</Headline>
        </Header>
        <Section>
          <Content>
            <MyResponsivePie data={data} colorBy={(item) => item.color} />
          </Content>
        </Section>
      </InnerWrapper>
    </Wrapper>
  );
};

export default ChartPages;
