import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import { getFormatDate } from 'helpers';
import { Wrapper, InnerWrapper, DateInfo } from './Task.style';

const Task = ({ title, content, createNoteData }) => {
  return (
    <Wrapper>
      <InnerWrapper withColor>
        <Headline>{title}</Headline>
        <DateInfo>{getFormatDate(createNoteData)}</DateInfo>
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
  createNoteData: PropTypes.number.isRequired,
};

export default Task;
