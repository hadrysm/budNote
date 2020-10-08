import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import LinkItem from 'components/atoms/LinkItem/LinkItem.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Button from 'components/atoms/Button/Button.style';
import { getFormatDate } from 'helpers';
import { Wrapper, InnerWrapper, DateInfo } from './Task.style';

const Task = ({ title, content, id, handleDeleteNotes, createNoteData }) => {
  return (
    <Wrapper>
      <LinkItem to={id}>
        <InnerWrapper withColor>
          <Headline>{title}</Headline>
          <DateInfo>{getFormatDate(createNoteData)}</DateInfo>
        </InnerWrapper>
      </LinkItem>
      <InnerWrapper>
        <Paragraph>{content}</Paragraph>
        <Button secondary onClick={() => handleDeleteNotes(id)}>
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
  handleDeleteNotes: PropTypes.func.isRequired,
  createNoteData: PropTypes.number.isRequired,
};

export default Task;
