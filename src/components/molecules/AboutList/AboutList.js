import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/atoms/List/List.style';

import { StyledListItem, InnerWrapper, StyledParagraph, StyledHeadline } from './AboutList.style';

const AboutList = ({ listItemsData }) => {
  const listItems = listItemsData.map(({ key, title, label }) => (
    <StyledListItem key={key}>
      <InnerWrapper withVariants>
        <StyledHeadline primaryColor as="h4">
          {title}
        </StyledHeadline>
        <StyledParagraph>{label}</StyledParagraph>
      </InnerWrapper>
    </StyledListItem>
  ));

  return <List>{listItems}</List>;
};

AboutList.propTypes = {
  listItemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AboutList;
