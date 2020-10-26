import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'components/atoms/ButtonIcon';

import { StyledListItem, InnerWrapper, StyledList, StyledParagraph } from './ContactList.style';

const ContactList = ({ listItemsData }) => {
  const listItems = listItemsData.map(({ key, icon, label }) => (
    <StyledListItem key={key}>
      <InnerWrapper>
        <ButtonIcon isBig icon={icon} />
        <StyledParagraph>{label}</StyledParagraph>
      </InnerWrapper>
    </StyledListItem>
  ));

  return <StyledList>{listItems}</StyledList>;
};

ContactList.propTypes = {
  listItemsData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactList;
