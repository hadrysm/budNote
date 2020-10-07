import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Button from 'components/atoms/Button/Button.style';
import { Wrapper, InnerWrapper, DateInfo } from './Task.style';

const Task = ({ title, content }) => {
  return (
    <Wrapper>
      <InnerWrapper withColor>
        <Headline>{title}</Headline>
        <DateInfo>05.10.2020</DateInfo>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>{content}</Paragraph>
        <Button secondary>Usuń</Button>
      </InnerWrapper>
    </Wrapper>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Task;
