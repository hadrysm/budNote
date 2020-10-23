import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';

const Balance = ({ budgetItems }) => {
  const total = budgetItems.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);

  return (
    <>
      <Headline>Suma</Headline>
      <Paragraph>{total} zł</Paragraph>
    </>
  );
};

Balance.propTypes = {
  budgetItems: PropTypes.arrayOf(PropTypes.object),
};

Balance.defaultProps = {
  budgetItems: [],
};

export default Balance;
