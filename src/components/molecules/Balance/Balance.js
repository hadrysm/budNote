import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/atoms/Headline';
import Paragraph from 'components/atoms/Paragraph';

const Balance = ({ budgetItems }) => {
  const total = budgetItems.reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);

  return (
    <div>
      <Headline>Suma</Headline>
      <Paragraph>{total} zł</Paragraph>
    </div>
  );
};

Balance.propTypes = {
  budgetItems: PropTypes.arrayOf(PropTypes.object),
};

Balance.defaultProps = {
  budgetItems: [],
};

export default Balance;
