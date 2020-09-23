import React from 'react';

import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import { getDate } from 'helpers';
import { Wrapper, StyledLink } from './Footer.style';

const Footer = () => {
  const year = getDate().getFullYear();

  return (
    <Wrapper>
      <div>
        <Paragraph>&copy; {year}</Paragraph>
      </div>
      <div>
        <StyledLink href="https://github.com/hadrysm">Mateusz Hadryś</StyledLink>
      </div>
    </Wrapper>
  );
};

export default Footer;
