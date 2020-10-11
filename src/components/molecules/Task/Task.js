import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import { getFormatDate } from 'helpers';
import { Wrapper, InnerWrapper, DateInfo } from './Task.style';

const Task = ({ title, content, createAt }) => {
  return (
    <Wrapper>
      <InnerWrapper withColor>
        <Headline>{title}</Headline>
        <DateInfo>{getFormatDate(createAt)}</DateInfo>
      </InnerWrapper>

      <InnerWrapper>
        <Paragraph>{content}</Paragraph>
      </InnerWrapper>
    </Wrapper>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createAt: PropTypes.number.isRequired,
};

export default Task;
