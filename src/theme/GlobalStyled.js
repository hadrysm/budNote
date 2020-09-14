import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
 *, *::after, *::before{
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html{
  font-size: 62.5%;
}

body{
  margin:0;
  padding:0;
  font-size: 1.6rem;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.background};
}

::-webkit-scrollbar {
      width: 4px; 

      @media(min-width:960px) {
          width: 10px;
        }
    }

::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.background};
}
::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
}
::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.tertiary};
}    
`;

export default GlobalStyled;
