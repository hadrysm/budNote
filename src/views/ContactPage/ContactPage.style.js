import styled from 'styled-components';

import Headline from 'components/atoms/Headline/Headline.style';
import Paragraph from 'components/atoms/Paragraph/Paragraph.style';
import Section from 'components/atoms/Section/Section.style';

export const StyledHeadline = styled(Headline)`
  text-align: center;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: 2rem;
`;

export const StyledSection = styled(Section)`
  flex-direction: column;
`;
