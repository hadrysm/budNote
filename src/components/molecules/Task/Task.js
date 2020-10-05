import React from 'react';

import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Button from 'components/atoms/Button/Button.style';
import { Wrapper, InnerWrapper, DateInfo } from './Task.style';

const Task = () => {
  return (
    <Wrapper>
      <InnerWrapper withColor>
        <Headline>notatka</Headline>
        <DateInfo>05.10.2020</DateInfo>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>
          jedzie pociaga sdsakjhas sdkjashd lkjjsadhasd jkhdasjkdkasdasd asdsadasd asd as a afdsfg
          sd
        </Paragraph>
        <Button secondary>Usuń</Button>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Task;
