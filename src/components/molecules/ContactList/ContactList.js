import React from 'react';
import PropTypes from 'prop-types';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon.style';

import { StyledListItem, InnerWrapper, StyledList, StyledParagraph } from './ContactList.style';

const ContactList = ({ listItemsData }) => {
  const listItems = listItemsData.map(({ key, icon, label }) => (
    <StyledListItem key={key}>
      <InnerWrapper>
        <ButtonIcon icon={icon} />
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
