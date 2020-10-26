import styled from 'styled-components';

import Headline from 'components/atoms/Headline';
import Paragraph from 'components/atoms/Paragraph';
import Section from 'components/atoms/Section';

export const StyledHeadline = styled(Headline)`
  text-align: center;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: 2rem;
`;

export const StyledSection = styled(Section)`
  flex-direction: column;
`;
