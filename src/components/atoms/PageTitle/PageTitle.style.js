import styled, { css } from 'styled-components';

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.font.size.m};
  text-transform: capitalize;

  ${({ screenRenderOnly }) =>
    screenRenderOnly &&
    css`
      position: absolute;
      overflow: hidden;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
    `};
`;

export default PageTitle;
