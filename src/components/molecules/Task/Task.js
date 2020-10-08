import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Button from 'components/atoms/Button/Button.style';
import { getFormatDate } from 'helpers';
import { Wrapper, InnerWrapper, DateInfo } from './Task.style';

const Task = ({ title, content, id, handleDelete, createNoteData }) => {
  return (
    <Wrapper>
      <InnerWrapper withColor>
        <Headline>{title}</Headline>
        <DateInfo>{getFormatDate(createNoteData)}</DateInfo>
      </InnerWrapper>
      <InnerWrapper>
        <Paragraph>{content}</Paragraph>
        <Button secondary onClick={() => handleDelete(id)}>
          Usuń
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  createNoteData: PropTypes.number.isRequired,
};

export default Task;
